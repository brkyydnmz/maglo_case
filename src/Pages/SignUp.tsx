import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../Assets/Assets";
import Logo from "../Components/Logo";

export const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  // Simulate page loading on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer);
  }, []);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFullName = (name: string): boolean => {
    return name.trim().length >= 2;
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };

  const handleFullNameChange = (value: string) => {
    setFullName(value);
    if (value && !validateFullName(value)) {
      setFullNameError("Full name must be at least 2 characters");
    } else {
      setFullNameError("");
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value && !validatePassword(value)) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSignIn = async () => {
    setFullNameError("");
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!fullName.trim()) {
      setFullNameError("Full name is required");
      hasError = true;
    } else if (!validateFullName(fullName)) {
      setFullNameError("Full name must be at least 2 characters");
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // 1.5 second submit

      navigate("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Account creation failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isPageLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-magloGreen mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg kumbh-semibold">Maglo.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 py-[4%] px-[5%] lg:px-[10%] h-full">
        <Logo />
        <p className="font-semibold text-2xl lg:text-3xl mt-[10%] lg:mt-[25%]">
          Create new account
        </p>
        <p className="kumbh-regular text-base text-figma-secondary">
          Welcome back! Please enter your details
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignIn();
          }}
        >
          <p className="kumbh-medium text-sm mt-6 mb-2">Full name</p>
          <input
            type="text"
            placeholder="Mahfuzul Nabil"
            className={`form-input w-full focus:outline-none ${
              fullNameError ? "border-red-500" : ""
            }`}
            autoComplete="name"
            value={fullName}
            onChange={(e) => handleFullNameChange(e.target.value)}
          />
          {fullNameError && (
            <p className="text-red-500 text-xs mt-1">{fullNameError}</p>
          )}
          <p className="kumbh-medium text-sm mt-6 mb-2">Email</p>
          <input
            type="email"
            placeholder="example@gmail.com"
            className={`form-input w-full focus:outline-none ${
              emailError ? "border-red-500" : ""
            }`}
            autoComplete="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
          />
          {emailError && (
            <p className="text-red-500 text-xs mt-1">{emailError}</p>
          )}
          <p className="kumbh-medium text-sm mt-6 mb-2">Password</p>
          <input
            type="password"
            className={`form-input w-full focus:outline-none ${
              passwordError ? "border-red-500" : ""
            }`}
            placeholder="●●●●●●●"
            autoComplete="new-password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          {passwordError && (
            <p className="text-red-500 text-xs mt-1">{passwordError}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`form-button w-full mt-6 kumbh-semibold text-sm relative ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-magloGreen hover:bg-green-500 transition-colors"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Creating Account...
              </div>
            ) : (
              "Create account"
            )}
          </button>
        </form>
        <div className="google-button flex justify-center mt-4 mb-6 cursor-pointer items-center w-full">
          <img src={assets.google} alt="google icon" className="w-5 h-5" />
          <p className="kumbh-medium ml-2 text-figma-gray">
            Sign up with google
          </p>
        </div>
        <p className="kumbh-regular text-sm text-figma-secondary text-center">
          Already have an account?{" "}
          <span className="kumbh-medium text-sm text-black cursor-pointer relative inline-block">
            Sign in
            <img
              src={assets.signInVector}
              alt=""
              className="absolute -bottom-3 left-0 w-full"
            />
          </span>
        </p>
      </div>
      <div className="hidden lg:block lg:w-1/2 h-full">
        <img
          src={assets.handWithCoin}
          alt="hand holding with icon"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};
