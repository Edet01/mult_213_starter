// Fetch a random dog image
export async function getDogImage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return data.message; // image URL
}

// Fetch a random cat fact
export async function getCatFact() {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  return data.fact; // fact string
}

// Fetch a random fox image
export async function getFoxImage() {
  const res = await fetch("https://randomfox.ca/floof/");
  const data = await res.json();
  return data.image; // image URL
}