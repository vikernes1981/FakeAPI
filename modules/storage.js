// modules/storage.js

// Save data to localStorage
export function saveItems(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Retrieve data from localStorage
export function useItems(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Remove data from localStorage
export function removeItems(key) {
    localStorage.removeItem(key);
}