export function calculateFoodScore(food) {
  // Example extraction
  const glycemicIndex = food.glycemic_index || 60; // fallback avg
  const nutrientDensity = food.nutrient_levels ? (
    (food.nutrient_levels.fiber === 'high' ? 100 : 50) +
    (food.nutrient_levels.proteins === 'high' ? 100 : 50)
  ) / 2 : 50;
  const naturalIngredients = food.ingredients_analysis_tags?.includes('en:natural') ? 100 : 50;
  const containsSeedOils = food.ingredients_text?.match(/(canola|soybean|corn|sunflower|cottonseed|grapeseed) oil/i);
  const isOrganicOrNonGMO = (food.labels_tags?.includes('organic') || food.labels_tags?.includes('non-gmo')) ? 100 : 0;

  const seedOilScore = containsSeedOils ? 0 : 100;

  const score =
    (100 - glycemicIndex) * 0.25 +
    nutrientDensity * 0.25 +
    naturalIngredients * 0.2 +
    seedOilScore * 0.15 +
    isOrganicOrNonGMO * 0.15;

  return Math.round(score);
}