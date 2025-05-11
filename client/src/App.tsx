import Generator from "./components/Generator";

function App() {
  return (
    <main className="mx-auto flex max-w-screen-xl flex-col items-center gap-10 px-4 py-10 sm:px-10">
      <section className="flex flex-col items-center gap-2 text-center">
        <h1>Interview Questions Generator</h1>
        <h2>Generate tailored interview questions based on experience level and job description</h2>
      </section>

      <section className="w-full">
        <Generator />
      </section>
    </main>
  );
}

export default App;
