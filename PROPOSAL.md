# Project proposal

* Name: Hassan RAZA
* Project title: Recipe Box
* Pitch (one sentence): A recipe book where students share simple recipes and leave reviews on the ones they cooked.
* Target users: Students who want easy, cheap meals and feedback from people who tried them.

## Pages

| URL | Content | Dynamic segment? | Rendering strategy and why |
|---|---|---|---|
| / | Welcome text and the 3 latest recipes | No | Static: same content for everyone, fast |
| /recipes | List of all recipes, with category and prep time | No | Static: the list only changes when a recipe is added |
| /recipes/[slug] | One recipe: ingredients, steps, and its reviews | Yes, [slug] | SSG with generateStaticParams: public page that benefits from SEO |
| /recipes/new | Form to add a recipe | No | Dynamic: it writes data (from Milestone 2) |
| /about | What the site is and who made it | No | Static: never changes |

## Data

Entities, their main fields, and how they are related:

* Recipe: slug, title, description, category, prepMinutes, servings, ingredients (list), steps (list)
* Review: id, recipeSlug, authorName, rating (1 to 5), comment, createdAt

Relation: one Recipe has many Reviews. Each Review belongs to one Recipe (via recipeSlug).

## Write actions

* Create a recipe (/recipes/new)
* Add a review on a recipe page
* Delete a review

## Repository

GitHub URL: https://github.com/iamhassanrazach/recipe-box
