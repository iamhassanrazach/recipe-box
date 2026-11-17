import type { Metadata } from "next";
import Link from "next/link";
import { RecipeList } from "@/components/recipe-list";
import { getRecipes } from "@/lib/recipes";

export const metadata: Metadata = {
  title: { absolute: "Recipe Box: simple student recipes" },
};

export default async function Home() {
  const recipes = await getRecipes();
  const latest = recipes.slice(-3).reverse();

  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Recipe Box</h1>
      <p className="mt-2">Easy, cheap recipes shared by students, with reviews from people who cooked them.</p>
      <h2 className="mt-8 text-xl font-semibold">Latest recipes</h2>
      <RecipeList recipes={latest} />
      <Link href="/recipes" className="mt-6 inline-block underline">
        See all recipes
      </Link>
    </main>
  );
}
