import Navbar from "./Navbar2"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout