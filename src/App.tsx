import { ContactForm } from "./components/contact/ContactForm";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { HowItWorks } from "./components/howItWorks/HowItWorks";
import { Services } from "./components/services/Services";
import { WhyUs } from "./components/whyUs/WhyUs";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <HowItWorks />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
