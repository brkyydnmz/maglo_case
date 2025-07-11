export const getCapitalized = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getPercentageString = (x: number, y: number): string => {
  return ((x / y) * 100).toFixed(0) + "%";
};

const getUserLocale = (): string => {
  return navigator.language || "en-US";
};

const getCurrencyByLocale = (locale: string): string => {
  const currencyMap: { [key: string]: string } = {
    "tr-TR": "TRY",
    tr: "TRY",
    "en-US": "USD",
    "en-GB": "GBP",
    "de-DE": "EUR",
    "fr-FR": "EUR",
    "es-ES": "EUR",
    "it-IT": "EUR",
    "ja-JP": "JPY",
  };

  return currencyMap[locale] || currencyMap[locale.split("-")[0]] || "USD";
};

// International currency formatting with auto-detection
export const formatCurrency = (
  amount: number,
  currency?: string,
  locale?: string
): string => {
  const userLocale = locale || getUserLocale();
  const userCurrency = currency || getCurrencyByLocale(userLocale);

  return new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: userCurrency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatDate = (
  dateString: string,
  locale?: string,
  options?: Intl.DateTimeFormatOptions
): string => {
  const date = new Date(dateString);
  const userLocale = locale || getUserLocale();
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat(userLocale, options || defaultOptions).format(
    date
  );
};

export const formatDateShort = (
  dateString: string,
  locale?: string
): string => {
  const date = new Date(dateString);
  const userLocale = locale || getUserLocale();
  return new Intl.DateTimeFormat(userLocale, {
    month: "short",
    day: "numeric",
  }).format(date);
};

export const formatNumber = (
  number: number,
  locale?: string,
  options?: Intl.NumberFormatOptions
): string => {
  const userLocale = locale || getUserLocale();
  return new Intl.NumberFormat(userLocale, options).format(number);
};
