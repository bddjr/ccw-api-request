import { buildHeaders } from "./buildHeader";

export async function request<Res>(
  url: string,
  args: any,
  method: "GET" | "POST",
): Promise<{
  data: Res;
}> {
  const headers = await buildHeaders(
    {
      "Content-Type": "application/json",
    },
    args,
  );
  const res = await fetch(url, {
    body: method == "POST" ? JSON.stringify(args) : null,
    headers,
    method: method,
    credentials: "include",
  });
  return await res.json().then((res) => {
    if (res.code == "200") {
      return { data: res };
    }
    throw new Error(`ccw request failed: ${res.msg}`, { cause: res });
  });
}
