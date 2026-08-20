import { buildHeaders } from "./buildHeader";

export async function request<Res>(
  url: string,
  args: any,
  method: "GET" | "POST",
): Promise<{
  data: Res;
}> {
  const requestBody = args ? JSON.stringify(args) : undefined;
  const headers = await buildHeaders(
    {
      "Content-Type": "application/json",
    },
    requestBody,
  );
  const response = await fetch(url, {
    body: requestBody,
    headers,
    method: method,
    credentials: "include",
  });
  const result = await response.json() as {
    body: any,
    code: string,
    msg: string | null,
    status: number,
  }
  if (result.code != "200") {
    throw new Error(`ccw request failed: ${result.msg}`, { cause: result });
  }
  return { data: result as Res };
}
