let hmacKey = "";
export async function getHmacKey(headers: Record<string, string>) {
  if (hmacKey) return hmacKey;
  const response = await fetch("https://community-web.ccw.site/health/check", {
    method: "POST",
    headers,
    credentials: "include",
  })
  const result = await response.json() as {
    body: {
      name: string,
      status: string,
      traceId: string,
    }[],
    code: string,
    msg: string | null,
    status: number,
  }
  if (result.code !== "200") {
    throw new Error("Request failed: failed to health check", {
      cause: result,
    });
  }
  return hmacKey = result.body
    .reduce((pv, { traceId: v }) => v[parseInt(v[0], 16) + 1] + pv, '')
}

export function clearHmacKey() {
  hmacKey = "";
}