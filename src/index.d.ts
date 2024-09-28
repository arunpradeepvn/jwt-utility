declare module '@arunpradeepvn/jwt-utility' {
  interface JWTPayload {
    sub: string;
    name: string;
    iat: number;
    [key: string]: any;
  }

  export const decodeJWT: (token: string) => JWTPayload;
}
