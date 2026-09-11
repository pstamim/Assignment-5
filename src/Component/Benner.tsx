
import benner from '../assets/banner-stack.png'

const Benner = () => {
    return (

        <div className='flex justify-between container mx-auto mt-30 items-center'>
            <div className='space-y-6'>

                <h1 className='text-5xl font-bold'>Build Your Ideal <br />
                    <span className='font-bold  bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>

                <p className='text-[#475569]'>Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.</p>


                <div className='flex gap-3 mt-10'>

                    <button className='  btn  bg-gradient-to-r from-[#F97316] to-[#EC4899]  px-2 text-white '>Explore Technologies</button>
                    <button className=' btn px-10'>Learn More</button>
                </div>
            </div>


            <div>
                <img src={benner} alt="" />
            </div>
        </div>

    );
};

export default Benner;