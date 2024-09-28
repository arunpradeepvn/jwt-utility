function manualAtob(encoded: string): string {
  const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let output = '';
  let buffer = 0;
  let bits = 0;

  for (let i = 0; i < encoded.length; i++) {
    const char = encoded.charAt(i);
    const charIndex = base64Chars.indexOf(char);

    if (charIndex === -1) {
      if (char === '=') continue;
      throw new Error('Invalid character in Base64 string');
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
  [key: string]: any; // Allows for any additional properties
}

export const decodeJWT = (token: string): JWTPayload => {
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid JWT format');
  }

  const payload = parts[1];
  const base64Url = payload.replace(/-/g, '+').replace(/_/g, '/');
  const decodedPayload = manualAtob(base64Url);

  try {
    return JSON.parse(decodedPayload) as JWTPayload;
  } catch (error) {
    throw new Error('Invalid JSON in JWT payload');
  }
};
