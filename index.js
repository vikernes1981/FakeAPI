import { saveItems, useItems } from './modules/storage.js';
import { fetchItems } from './modules/network.js';
import { renderProducts } from './modules/ui.js';

const API_URL = 'https://fakestoreapi.com/products';

async function main() {
    // Fetch products from the API
    const products = await fetchItems(API_URL);

    // Save products to localStorage
    saveItems('products', products);

    // Retrieve products from localStorage
    const storedProducts = useItems('products');

    // Render products to the DOM
    renderProducts(storedProducts, 'products');
}

main();