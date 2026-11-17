import type { Metadata } from "next";
import { RecipeList } from "@/components/recipe-list";
import { getRecipes } from "@/lib/recipes";

// Rendered on each request, so loading.tsx is visible under npm start too
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Recipes",
  description: "All the recipes of Recipe Box",
};

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Recipes</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Rendered at {new Date().toISOString()}
      </p>
      <RecipeList recipes={recipes} />
    </main>
  );
}
