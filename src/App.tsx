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

      <ToastContainer
      position="top-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />

    </>
  )
}

export default App
