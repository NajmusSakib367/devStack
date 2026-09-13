import { Suspense } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Loading from "./components/Loading"
import Technologies from "./components/Technologies"
import type { ITechnology } from "./types/technology"
import { Bounce, ToastContainer } from "react-toastify"


const technologyFetch = async (): Promise<ITechnology[]> => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}



function App() {



   const technologiesPromise = technologyFetch();
  return (
    <>
        <Navbar />
        <Banner />
      <Suspense fallback={<Loading />}>
       <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
