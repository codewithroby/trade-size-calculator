import { Calculator } from "@/components/calculator";

const HomePage = () => (
  <main>
    <section className="flex min-h-screen items-center justify-center">
      <div className="container flex max-w-md flex-col space-y-4 px-4">
        <h1 className="text-center text-xl font-bold uppercase">
          Trade Size Calculator
        </h1>
        <Calculator />
      </div>
    </section>
  </main>
);

export default HomePage;
