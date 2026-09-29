import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
