import {
  ProtectedHeaderParameters,
  decodeProtectedHeader,
  JWTPayload,
  decodeJwt,
} from "jose";

export function decodeHeader(encodeString: string): ProtectedHeaderParameters {
  try {
    const x = decodeProtectedHeader(encodeString);
    return x;
  } catch (e) {
    return {};
  }
}

export function decodePayload(encodeString: string): JWTPayload {
  try {
    const x = decodeJwt(encodeString);
    console.log(x);
    return x;
  } catch (e) {
    return {};
  }
}
