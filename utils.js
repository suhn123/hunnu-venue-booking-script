/**
 * 通用工具函数
 * 
 * 仅用于读取配置与展示结构
 */
import fs from "fs";
import path from "path";

export function loadEnvConfig() {
    return {
        USER_ID: "example_user_id",
        TOKEN: "example_token_value"
    };
}

export function loadBookingConfig() {
    const filePath = path.resolve("config", "booking.example.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
}
