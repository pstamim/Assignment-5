
import { Suspense } from 'react'
import Benner from './Component/Benner'
import ExploretheTechnologies from './Component/ExploretheTechnologies'
import type { IExplorCompany } from './Component/Interface'
import Nav from './Component/Nav'
import Footer from './Component/Footer'



const explorcompnydata = async (): Promise<IExplorCompany[]> => {
  const res = await fetch('/DevStack-data.json')
  const data = await res.json()
  return data
}

function App() {




  return (
    <>
      <Nav />
      <Benner />
      <Suspense fallback={<h1 className='container mx-auto text-3xl'>Loading...</h1>}>
        <ExploretheTechnologies explorcompnydata={explorcompnydata()} />
      </Suspense>

      <Footer />
      

    </>
  )
}

export default App
