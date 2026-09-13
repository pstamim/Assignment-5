

import { useState } from 'react';
import type { IExplorCompany } from './Interface';
import Maincart from './Maincart';
import { toast } from 'react-toastify';
import { IoMdClose } from 'react-icons/io';


interface Icompanymap {
    compnydata: IExplorCompany[]
}

const Cart = ({ compnydata }: Icompanymap) => {

    const [addStack, setaddStack] = useState<IExplorCompany[]>([])

    const handleaddstack = (technologies: IExplorCompany) => {
        const alreadyselected = addStack.some(items => items.id === technologies.id)
        if (alreadyselected) {
            toast.error('alreadyselected')
        }
        else {

            setaddStack([...addStack, technologies])
            toast.success('Added Successfly')
        }


    }

    const handleremovestack = (id: number) => {
        setaddStack(addStack.filter(items => items.id !== id))

    }
    const handleRemoveall = () => {
        setaddStack([])
    }
    return (
        <div className='container mx-auto mt-20 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div className=' md:col-span-3'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>


                        {
                            compnydata.map((maindata: IExplorCompany) => {
                                return <Maincart key={maindata.id} maindata={maindata} handleaddstack={handleaddstack} addStack={addStack} />
                            })
                        }
                    </div>
                </div>
                <div className='md:col-span-1'>
                    <div className='border border-slate-200 rounded-2xl p-5 h-fit'>
                        <h1 className='font-bold text-3xl'>Your Stack</h1>
                        <p className='text-sm text-slate-400 mt-1'>
                            {addStack.length === 0 ? 'No technologies selected yet.' : `${addStack.length} Technology Selected`}
                        </p>

                        <div className='flex justify-center'>
                            {
                                addStack.length === 0 ? (
                                    <p className='border border-dashed p-8 mt-15 rounded-2xl px-20 text-[#94A3B8]'>Your stack is empty.</p>
                                ) : (
                                    <p></p>
                                )
                            }
                        </div>




                        <div className='mt-4'>
                            {
                                addStack.map((item) => {
                                    return <div className='flex items-center justify-between border border-slate-200 p-3 rounded-xl mb-2'>
                                        <div className='flex items-center min-w-0' >
                                            <img className='h-[60px] w-[60px]' src={item.icon} alt="" />
                                            <div className='ml-3 min-w-0'>
                                                <h1 className='text-2xl font-bold'>{item.name}</h1>
                                                <p className='text-[#64748B]'>{item.category}</p>

                                            </div>
                                        </div>

                                        <IoMdClose onClick={() => handleremovestack(item.id)}
                                            className='text-4xl text-[#64748B] cursor-pointer' />

                                    </div>

                                })
                            }
                        </div>
                        <div>
                            {
                                addStack.length > 0 &&
                                <button onClick={handleRemoveall}
                                    className=' border border-red-500 rounded-xl font-bold text-2xl py-2 px-25 cursor-pointer text-red-500 mt-15'
                                >RemoveAll</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Cart;