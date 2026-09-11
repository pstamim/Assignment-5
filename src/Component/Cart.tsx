

import { useState, type Dispatch, type SetStateAction } from 'react';
import type { IExplorCompany } from './Interface';
import Maincart from './Maincart';
import { MdClose } from 'react-icons/md';
import { GiToaster } from 'react-icons/gi';
interface Icompanymap {
    compnydata: IExplorCompany[]

}

const Cart = ({ compnydata }: Icompanymap) => {

    const [addStack, setaddStack] = useState<IExplorCompany[]>([])

    const handleaddstack = (technologies: IExplorCompany) => {
        const alreadyselected = addStack.some(items => items.id === technologies.id)
        if (alreadyselected) {
            GiToaster('alreadyselected')
        }
        else {

            setaddStack([...addStack, technologies])
        }

    }
    return (
        <div className='grid grid-cols-3 container mx-auto mt-20'>
            {
                compnydata.map((maindata: IExplorCompany) => {
                    return <Maincart key={maindata.id} maindata={maindata} handleaddstack={handleaddstack} />
                })
            }
            <div className='border border-slate-200 rounded-2xl p-5 h-fit'>
                <h1 className='font-bold text-3xl'>Your Stack</h1>
                <p className='text-sm text-slate-400 mt-1'>
                    {addStack.length} Technology Selected
                </p>
                <div>
                    {
                        addStack.map((item) => {
                            return <div className='flex items-center justify-between border border-slate-200 p-5 rounded-2xl m-2 '>
                                <div className='flex' >
                                    <img className='h-[60px] w-[60px]' src={item.icon} alt="" />
                                    <div className='ml-4'>
                                        <h1 className='text-2xl font-bold'>{item.name}</h1>
                                        <p className='text-[#64748B]'>{item.category}</p>

                                    </div>

                                </div>




                                <button> <MdClose className='text-4xl text-slate-400 cursor-pointer' /></button>
                            </div>
                        })
                    }
                </div>

            </div>
        </div>
    );
};


export default Cart;