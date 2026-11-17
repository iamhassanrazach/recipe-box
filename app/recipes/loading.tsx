// Shown at once while a page of /recipes waits for its data
export default function RecipesLoading() {
  return (
    <p role="status" className="mx-auto w-full max-w-2xl p-8">
      Loading the recipes...
    </p>
  );
}
