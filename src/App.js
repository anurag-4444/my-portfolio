import Header, { HeaderPhone } from "./components/Header"
import Home from "./components/Home"
import Work from "./components/Work"
import TimeLine from "./components/TimeLine"
import Services from "./components/Services.jsx"
import Testimonial from "./components/Testimonial.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight)

  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight)
    }
    window.addEventListener("resize", resizeRatio)
    return () => {
      window.removeEventListener("resize", resizeRatio)
    }
  }, [ratio])

  return ratio < 2 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio}/>
      <Work />
      <TimeLine />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : <em id="customMessage">Please Change the ratio to View!</em>
}

export default App