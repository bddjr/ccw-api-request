//#region src/index.d.ts
declare function setToken(t: string): void;
declare function getToken(): string;
declare const requestUtils: {
  post<Res = any>(url: string, args?: null): Promise<{
    data: Res;
  }>;
  get<Res = any>(url: string): Promise<{
    data: Res;
  }>;
};
//#endregion
export { getToken, requestUtils, setToken };