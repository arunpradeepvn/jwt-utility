# JWT Utility

A simple utility for decoding JWT (JSON Web Tokens) in TypeScript.

## Installation

You can install the package via npm:

```bash
npm install @arunpradeepvn/jwt-utility
```

You can install the package via yarn:

```bash
yarn add @arunpradeepvn/jwt-utility
```

## Usage

### Importing the Utility
You can import the decodeJWT function from the package:

```bash
import { decodeJWT } from '@arunpradeepvn/jwt-utility';
```

### Decoding a JWT
To decode a JWT, use the decodeJWT function:

```bash
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
