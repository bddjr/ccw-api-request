import { clearHmacKey } from "./healthCheck";
import { request } from "./hook";

let token = "";
export function setToken(t: string) {
  token = String(t);
  clearHmacKey();
}

export function getToken() {
  return token;
}

export const requestUtils = {
  async post<Res = any>(url: string, args = null) {
    return await request<Res>(url, args, "POST");
  },
  async get<Res = any>(url: string) {
    return await request<Res>(url, null, "GET");
  },
};
