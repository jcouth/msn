const BASE = "";

export const validateToken = async ({ token }) => {
  const delay = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  await delay(3000);
  const isValid = false;
  return isValid;
};
