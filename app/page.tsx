import List from "@/components/list";
import Shortener from "@/components/shortener";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-12 md:py-24">
      <div className="flex justify-center">
        <div className="flex flex-col text-center gap-3 w-full">
          <h1 className="text-4xl font-bold">URL Shortener</h1>
          <p className="mb-10">Get a simple URL</p>

          <Shortener />
          <List />
        </div>
      </div>
    </main>
  );
}
