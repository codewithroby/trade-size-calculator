import { Calculator } from "@/components/calculator";

const HomePage = () => (
  <main>
    <section className="flex min-h-screen items-center justify-center">
      <div className="container flex max-w-lg flex-col space-y-6 px-4">
        <h1 className="text-center text-xl font-bold uppercase sm:text-2xl md:text-3xl">
          Trade Size Calculator
        </h1>
        <Calculator />
      </div>
    </section>
  </main>
);

export default HomePage;
