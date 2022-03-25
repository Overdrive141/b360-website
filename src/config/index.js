const isProduction = process.env.NODE_ENV == "production";
const isDevelopment = !isProduction;

export const CONFIG = {
  isProduction,
  isDevelopment,
  baseURL: isDevelopment ? "http://localhost:3000" : "",
};
