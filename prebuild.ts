import { fetchTenant } from "@design-system/branding/fetch-tenant";
import { config } from "dotenv"
config();
const url = process.env.NEXT_PUBLIC_MULTITENANT_URL;
const token = process.env.NEXT_PUBLIC_MULTITENANT_TOKEN;
if (url === undefined || token === undefined) {
  console.error("Missing NEXT_PUBLIC_MULTITENANT_URL or NEXT_PUBLIC_MULTITENANT_TOKEN environment variables");
  process.exit(1);
}
fetchTenant(url, token)