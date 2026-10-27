import dotenv from "dotenv"

dotenv.config()


export const envConfig = {
    port: Number(process.env.PORT ?? 4000),
    nodeEnv: process.env.NODE_ENV ?? "development",
    isProduction: (process.env.NODE_ENV ?? "development") === "production",
    logLevel:process.env.LOG_LEVEL ?? "info"
} as const