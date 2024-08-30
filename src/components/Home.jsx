import Footer from "./Footer";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Sponsors from "./Sponsors";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Features from "./Features";
import "./home.css";
import Newsletter from "./Newsletter";
import Blogs from "./Blogs";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Landing />
      <Sponsors />
      <Features />
      <Team />
      <Testimonials />
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
