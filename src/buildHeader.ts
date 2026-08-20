import md5 from "tinyhmacmd5";
import { getToken } from ".";
import { getHmacKey } from "./healthCheck";
import { getRandomId } from "./randomId";
const guestId = getRandomId();
export async function buildHeaders(
  headers: Record<string, string>,
  body: string | undefined,
  timeStamp = Date.now(),
) {
  const token = getToken()
  if (token) {
    headers["Token"] = token;
  } else {
    headers["Guest-Id"] = guestId;
  }
  if (body) {
    const hmacKey = await getHmacKey(headers);
    const b = `${timeStamp}`
    headers["B"] = b;
    headers["A"] = md5(`ccw${body}${b}`, hmacKey);
  }
  return headers;
}
