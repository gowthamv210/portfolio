import PageNav from "./components/PageNav";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <PageNav />
      <HomePage />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
