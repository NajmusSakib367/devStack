import { Suspense } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import LoadingSpinner from "./components/Loading"
function App() {

  return (
    <>
        <Navbar />
        <Banner />
      <Suspense fallback={<Loading />}>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
