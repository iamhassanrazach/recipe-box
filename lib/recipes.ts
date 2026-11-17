import recipes from "@/data/recipes.json";
import reviews from "@/data/reviews.json";

export type Recipe = {
  slug: string;
  title: string;
  description: string;
  category: string;
  prepMinutes: number;
  servings: number;
  ingredients: string[];
  steps: string[];
};

export type Review = {
  id: number;
  recipeSlug: string;
  authorName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

// Simulates a slow database query (1 second)
export async function getRecipes(): Promise<Recipe[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return recipes;
}

// The slug comes from the URL, for example "pasta-carbonara"
export async function getRecipe(slug: string): Promise<Recipe | undefined> {
  const all = await getRecipes();
  return all.find((recipe) => recipe.slug === slug);
}

// One recipe has many reviews: keep the reviews that point to this recipe
export async function getReviews(recipeSlug: string): Promise<Review[]> {
  return reviews.filter((review) => review.recipeSlug === recipeSlug);
}
