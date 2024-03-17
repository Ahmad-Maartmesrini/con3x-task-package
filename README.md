**Technical Task Package**

---

### Installation

You can install this npm package by typing the following command in your terminal:

```
npm install technical-task
```

### Usage

This npm package provides two main functions:

1. **getLastBlockNumber**: Fetches the last block number of the Ethereum mainnet using the Alchemy SDK API key.

2. **Balance**: Fetches the balance of a given Ethereum address.

### How to Use

To use the functions provided by this package, import them into your project as needed.

```typescript
import { getLastBlockNumber, Balance } from "technical-task";

// Example usage of getLastBlockNumber
const lastBlockNumber = await getLastBlockNumber();

// Example usage of Balance
const address = "0x1234567890123456789012345678901234567890";
const balance = await Balance(address, "your-api-key");
```

- **getLastBlockNumber** function expects an Alchemy SDK API key as an argument.
- **Balance** function expects an Ethereum address as an argument.


### License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
