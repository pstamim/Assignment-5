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


    // Add to Stack
    const handleaddstack = (technologies: IExplorCompany) => {

        const alreadyselected = addStack.some(
            items => items.id === technologies.id
        )

        if (alreadyselected) {

            toast.error('Already selected')

        } else {

            setaddStack([...addStack, technologies])

            toast.success('Added Successfully')

        }

    }


    // Remove One Technology
    const handleremovestack = (id: number) => {

        setaddStack(
            addStack.filter(items => items.id !== id)
        )

    }


    // Remove All Technology
    const handleRemoveall = () => {

        setaddStack([])

    }


    return (

        <div className='container mx-auto mt-20 px-4'>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>


                {/* LEFT SIDE - TECHNOLOGY CARDS */}

                <div className='md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {
                        compnydata.map((maindata: IExplorCompany) => {

                            return (

                                <Maincart
                                    key={maindata.id}
                                    maindata={maindata}
                                    handleaddstack={handleaddstack}
                                />

                            )

                        })
                    }

                </div>



                {/* RIGHT SIDE - YOUR STACK */}

                <div className='md:col-span-1'>

                    <div className='border border-slate-200 rounded-2xl p-5 h-fit md:sticky md:top-5'>


                        {/* Stack Heading */}

                        <h1 className='font-bold text-3xl'>
                            Your Stack
                        </h1>


                        <p className='text-sm text-slate-400 mt-1'>
                            {addStack.length} Technology Selected
                        </p>



                        {/* Selected Technology */}

                        <div className='mt-4'>

                            {
                                addStack.map((item) => {

                                    return (

                                        <div
                                            key={item.id}
                                            className='flex items-center justify-between border border-slate-200 p-3 rounded-xl mb-2'
                                        >
                                        
                                            <div className='flex items-center min-w-0'>

                                                <img
                                                    className='h-10 w-10 object-contain'
                                                    src={item.icon}
                                                    alt={item.name}
                                                />


                                                <div className='ml-3 min-w-0'>

                                                    <h1 className='font-bold text-base'>
                                                        {item.name}
                                                    </h1>


                                                    <p className='text-sm text-[#64748B]'>
                                                        {item.category}
                                                    </p>

                                                </div>

                                            </div>
                                            <IoMdClose
                                                onClick={() => handleremovestack(item.id)}
                                                className='text-2xl text-[#64748B] cursor-pointer shrink-0 ml-2'
                                            />
                                        </div>

                                    )

                                })

                            }

                        </div>
                        <button
                            onClick={handleRemoveall}
                            disabled={addStack.length === 0}
                            className='border border-red-500 rounded-xl font-bold py-2 w-full cursor-pointer text-red-500 mt-5 disabled:opacity-50 disabled:cursor-not-allowed'
                        >Remove All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;