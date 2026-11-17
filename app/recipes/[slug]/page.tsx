import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, getRecipes, getReviews } from "@/lib/recipes";

// Only the slugs returned by generateStaticParams exist: any other slug is a 404
export const dynamicParams = false;

// Runs at build time: one HTML page per recipe
export async function generateStaticParams() {
  const recipes = await getRecipes();
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/recipes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const recipe = await getRecipe(slug);
  if (!recipe) return {};
  return { title: recipe.title, description: recipe.description };
}

export default async function RecipePage({ params }: PageProps<"/recipes/[slug]">) {
  const { slug } = await params;
  const recipe = await getRecipe(slug);
  if (!recipe) notFound();
  const reviews = await getReviews(recipe.slug);

  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <p className="mt-2">
        {recipe.category} · {recipe.prepMinutes} min · {recipe.servings} servings
      </p>
      <p className="mt-2">{recipe.description}</p>

      <h2 className="mt-6 text-xl font-semibold">Ingredients</h2>
      <ul className="mt-2 list-disc pl-6">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Steps</h2>
      <ol className="mt-2 list-decimal space-y-1 pl-6">
        {recipe.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2 className="mt-6 text-xl font-semibold">Reviews ({reviews.length})</h2>
      {reviews.length === 0 ? (
        <p className="mt-2">No reviews yet.</p>
      ) : (
        <ul className="mt-2 space-y-3">
          {reviews.map((review) => (
            <li key={review.id} className="rounded border p-3">
              <p className="font-semibold">
                {review.authorName} · {review.rating}/5
              </p>
              <p className="text-sm">{review.comment}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{review.createdAt}</p>
            </li>
          ))}
        </ul>
      )}

      <Link href="/recipes" className="mt-6 inline-block underline">
        Back to all recipes
      </Link>
    </main>
  );
}
