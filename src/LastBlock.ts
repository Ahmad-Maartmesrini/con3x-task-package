import { Network, Alchemy } from "alchemy-sdk";

export default async function getLastBlockNumber(key: string) {
    const network = Network.ETH_MAINNET;
    const apiKey = key;
    const alchemy = new Alchemy({ network, apiKey });

    try {
        const blockNumber = await alchemy.core.getBlockNumber();
        return blockNumber;
    } catch (error) {
        console.error("Error fetching block number:", error);
        throw error;
    }
}
