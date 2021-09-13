const BASE = "";

export const validateToken = async ({ token }) => {
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  (async () => {
    await delay(1000);
  })();
  return true;
};
