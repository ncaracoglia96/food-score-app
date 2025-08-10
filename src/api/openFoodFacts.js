export async function getFoodInfo(barcode) {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );
    const json = await response.json();
    if (json.status === 1) {
      return json.product;
    }
    return null;
  } catch (e) {
    return null;
  }
}
