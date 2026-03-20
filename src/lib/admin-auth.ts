import bcrypt from "bcryptjs";

const ADMIN_PASSWORD_HASH = bcrypt.hashSync("admin123", 10);
const ADMIN_TOKEN = "sportsurf-admin-session";

export function verifyAdminPassword(password: string): boolean {
  return bcrypt.compareSync(password, ADMIN_PASSWORD_HASH);
}

export function generateAdminToken(): string {
  return ADMIN_TOKEN;
}

export function verifyAdminToken(token: string): boolean {
  return token === ADMIN_TOKEN;
}
