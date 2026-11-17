import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "What Recipe Box is and who made it",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl p-8">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-2">
        Recipe Box is a small recipe book for students, built with Next.js for the Full-Stack
        Frameworks course at EPITA. All recipes and reviews are invented sample data.
      </p>
    </main>
  );
}
