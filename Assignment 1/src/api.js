// src/api.js

const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";
const CAT_API_URL = "https://catfact.ninja/fact";
const FOX_API_URL = "https://randomfox.ca/floof/";

/**
 * Handles fetching from an API and checking for non-200 responses.
 * Uses: async/await, template literals, Promises (via fetch).
 */
async function fetchData(url) {
    const response = await fetch(url);
    
    // Crucial Error Handling: Check if the HTTP status is successful (200-299)
    if (!response.ok) {
        // Use template literal for clear error message
        throw new Error(`API failed with status: ${response.status} (${response.statusText})`);
    }

    const data = await response.json();
    return data;
}

// Fetch a random dog image (Endpoint 1)
export async function getDogImage() {
    // Uses the generic fetch handler
    const data = await fetchData(DOG_API_URL);
    return data.message; // image URL
}

// Fetch a random cat fact (Endpoint 2)
export async function getCatFact() {
    const data = await fetchData(CAT_API_URL);
    return data.fact; // fact string
}

// Fetch a random fox image (Endpoint 3)
export async function getFoxImage() {
    const data = await fetchData(FOX_API_URL);
    return data.image; // image URL
}