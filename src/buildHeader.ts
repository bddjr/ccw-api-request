import md5 from "tinyhmacmd5";
import { getToken } from ".";
import { getHmacKey } from "./healthCheck";
import { getRandomId } from "./randomId";
const guestId = getRandomId();
export async function buildHeaders(
  headers: Record<string, string>,
  args: any,
  timeStamp = Date.now(),
) {
  if (getToken().length > 0) {
    headers["Token"] = getToken();
  } else {
    headers["Guest-Id"] = guestId;
  }
  const hmacKey = await getHmacKey(headers);
  headers["B"] = `${timeStamp}`;
  headers["A"] = md5(`ccw${JSON.stringify(args)}${timeStamp}`, hmacKey);
  return headers;
}
