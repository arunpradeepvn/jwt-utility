function aTob(encoded: string): string {
  const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let output = '';
  let buffer = 0;
  let bits = 0;

  for (let i = 0; i < encoded.length; i++) {
    const char = encoded.charAt(i);
    const charIndex = base64Chars.indexOf(char);

    if (charIndex === -1) {
      if (char === '=') continue;
      throw new Error(`Invalid character "${char}" in Base64 string`);
    }

    buffer = (buffer << 6) | charIndex;
    bits += 6;

    while (bits >= 8) {
      const byte = (buffer >> (bits - 8)) & 0xFF;
      output += String.fromCharCode(byte);
      bits -= 8;
    }
  }

  return output;
}

interface JWTPayload {
  sub: string;
  name: string;
  iat: number;
  [key: string]: any;
}

export const decodeJWT = async (token: string): Promise<JWTPayload> => {
  if (!token) {
    throw new Error('JWT token is empty');
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid JWT format: expected 3 parts');
  }

  const payload = parts[1];
  const base64Url = payload.replace(/-/g, '+').replace(/_/g, '/');
  const decodedPayload = aTob(base64Url);

  try {
    return JSON.parse(decodedPayload) as JWTPayload;
  } catch (error) {
    throw new Error('Invalid JSON in JWT payload');
  }
};
