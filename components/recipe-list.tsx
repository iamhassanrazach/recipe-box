import Link from "next/link";
import type { Recipe } from "@/lib/recipes";

export function RecipeList({ recipes }: { recipes: Recipe[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {recipes.map((recipe) => (
        <li key={recipe.slug} className="rounded border p-4">
          <h2 className="font-semibold">
            <Link href={`/recipes/${recipe.slug}`} className="hover:underline">
              {recipe.title}
            </Link>
          </h2>
          <p className="text-sm">
            {recipe.category} · {recipe.prepMinutes} min · {recipe.servings} servings
          </p>
          <p className="mt-1 text-sm">{recipe.description}</p>
        </li>
      ))}
    </ul>
  );
}
