import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Services } from "./components/services/Services";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
