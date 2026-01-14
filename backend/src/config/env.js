/**
 * Centralized environment configuration.
 * This avoids process.env being read ad hoc throughout the codebase.
 */

export const env = {
  port: process.env.PORT || "3000",
  nodeEnv: process.env.NODE_ENV || "development",
};
