import { use } from "react";
import type { IExplorCompany } from "./Interface";
import Cart from "./Cart";

interface Icompnyprops {
    explorcompnydata: Promise<IExplorCompany[]>
}




const ExploretheTechnologies = ({ explorcompnydata }: Icompnyprops) => {
    const compnydata = use(explorcompnydata)

    return (
        <>

            <div className='container mx-auto space-y-2 mt-10'>
                <h1 className='text-4xl font-bold'>Explore the <span className='text-[#EC4899]'>Technologies</span></h1>
                <p className="text-[#64748B]">Pick one technology per category to build your ideal stack.</p>
            </div>

            <Cart compnydata={compnydata} />
        </>

    )
}

export default ExploretheTechnologies;