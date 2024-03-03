export async function Balance(address: string): Promise<number> {
    return fetch(address)
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const balance = data.result / 1e6;
            return balance;
        })
        .catch((error) => {
            console.error("Error fetching balance:", error);
            throw error;
        });
}
