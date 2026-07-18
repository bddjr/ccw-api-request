let hmacKey = "";
export async function getHmacKey(headers: Record<string, string>) {
  if (hmacKey.length > 0) return hmacKey;
  const response = await fetch("https://community-web.ccw.site/health/check", {
    method: "POST",
    headers,
    credentials: "include",
  }).then((res) => res.json());
  if (response.code !== "200") {
    throw new Error("Request failed: failed to health check", {
      cause: response,
    });
  }
  hmacKey = response.body
    .map(({ traceId }) => {
      return traceId[parseInt(traceId[0], 16) + 1];
    })
    .reverse()
    .join("");
  return getHmacKey(headers);
}

export function clearHmacKey() {
  hmacKey = "";
}