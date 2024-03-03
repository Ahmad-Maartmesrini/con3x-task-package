export async function Balance(address: string): Promise<number> {
    // const url = `https://api.example.com/balance/${address}`; // Replace with the actual API endpoint for fetching balances

    return fetch(address)
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const balance = data.result / 1e6; // Adjust this according to the API response structure
            return balance;
        })
        .catch((error) => {
            console.error("Error fetching balance:", error);
            throw error; // Rethrow the error to handle it outside this function if needed
        });
}
