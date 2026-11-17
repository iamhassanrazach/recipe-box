// Wraps /recipes and every page below it, such as /recipes/shakshuka.
// It stays on screen, with its state, while you move between them.
export default function RecipesLayout({ children }: LayoutProps<"/recipes">) {
  return (
    <>
      <aside aria-label="Shopping list" className="mx-auto w-full max-w-2xl px-8 pt-6">
        <label className="flex items-center gap-2 text-sm">
          My shopping list
          <input type="text" className="rounded border px-2 py-1" />
        </label>
      </aside>
      {children}
    </>
  );
}
