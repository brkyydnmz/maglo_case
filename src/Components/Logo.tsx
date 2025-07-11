import { assets } from "../Assets/Assets";

const Logo = () => {
  return (
    <div className="cursor-pointer flex items-center">
      <img src={assets.Logo} alt="logo" className="w-8 h-8" />
      <p className="font-bold text-lg ml-2 gordita leading-none tracking-normal">
        Maglo.
      </p>
    </div>
  );
};

export default Logo;
