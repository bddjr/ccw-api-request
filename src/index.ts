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
  post<Res = any>(url: string, args?: any) {
    return request<Res>(url, args, "POST");
  },
  get<Res = any>(url: string) {
    return request<Res>(url, null, "GET");
  },
};
