import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Greeting name="Rizki Rahmadani" />

      <Footer year={2024} />
    </div>
  );
}
