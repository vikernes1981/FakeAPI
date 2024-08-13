export async function fetchItems(api) {
    return await fetch(api)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error:', error);
            return [];  // Return an empty array in case of an error
        });
}