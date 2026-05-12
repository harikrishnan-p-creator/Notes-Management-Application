import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Notes from "./components/Notes";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SignIn from "./components/Signin";
import "./style.css";
function Home() {
return (
<>
<Hero />
</>
);
}
function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/notes" element={<Notes />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
<Route path="/signin"  element={<SignIn/>}/>
</Routes>
<Footer />
</BrowserRouter>
);
}
export default App;