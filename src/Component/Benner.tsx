
import benner from '../assets/banner-stack.png'

const Benner = () => {
    return (

        <div className='container mx-auto px-4 md:px-0 mt-10 md:mt-30 items-center'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                <div className='space-y-4 md:space-y-6 text-center md:text-left'>


                    <h1 className='text-4xl md:text-5xl font-bold'>Build Your Ideal <br />
                        <span className='font-bold  bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span></h1>

                    <p className='text-[#475569] w-115'>Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>




                    <div className='flex flex-row  gap-4 mt-10 justify-center md:justify-start '>
                        <button className='  btn  bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#7C3AED] px-4 border border-black text-white whitespace-nowrap'>Explore Technologies</button>
                        <button className=' btn px-10 whitespace-nowrap'>Learn More</button>
                    </div>


                </div>
                <div>
                    <img  src={benner} alt="" />
                </div>

            </div>





        </div>

    );
};

export default Benner;