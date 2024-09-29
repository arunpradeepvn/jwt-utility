# JWT Utility

A simple utility for decoding JWT (JSON Web Tokens) in TypeScript.

## Installation

You can install the package via npm:

```bash
npm install @arunpradeepvn/jwt-utility@latest
```

You can install the package via yarn:

```bash
yarn add @arunpradeepvn/jwt-utility@latest
```

## Usage

### Importing the Utility
You can import the decodeJWT function from the package:

```js
import { decodeJWT } from '@arunpradeepvn/jwt-utility';
```

### Decoding a JWT
To decode a JWT, use the decodeJWT function:

```js
const token = 'YOUR_JWT_TOKEN_HERE';
try {
    const decoded = decodeJWT(token);
    console.log(decoded);
} catch (error) {
    console.error('Failed to decode token:', error);
}
```

### API
decodeJWT(token: string): Record<string, any>

token: A JWT string to decode.

Returns: The decoded payload as a JSON object.
