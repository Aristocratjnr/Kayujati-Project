import Footer from "./fragments/Footer";
import LandingPageContent from "./fragments/LandingPageContent";
import Navbar from "./fragments/Navbar";

export default function Home() {
  return (
    <main className="h-screen w-screen flex-col">
      <Navbar/> 
      <LandingPageContent/>
      <Footer/>
    </main>
  );
}
