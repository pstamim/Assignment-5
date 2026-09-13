
import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <>
            <footer className='mt-10 pt-10'>

                <div className="divider mt-10 " />
                <div className='container mx-auto px-5 md:px-0 mt-15 md:mt-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
                    <div className='flex flex-col items-center text-center space-y-4 sm:col-span-2 md:col-span-1 md:items-start md:text-left'>
                        <img className='h-[40px] w-[160px] menu-dropdown' src={Logo} alt="" />
                        <p className='text-[#64748B] text-sm leading-7'>Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <ul className='flex gap-5 text-[#475569] font-medium '>
                            <li><a href="">GitHub</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex flex-col gap-2'>
                        <h3 className=' font-bold '>PRODUCT</h3>
                        <a className='text-[#64748B]' href="">Home</a>
                        <a className='text-[#64748B]' href="">Technologies</a>
                        <a className='text-[#64748B]' href="">Projects</a>

                    </div>
                    <div className='hidden md:flex flex-col gap-2 '>
                        <h3 className=' font-bold '>COMPANY</h3>
                        <a className='text-[#64748B]' href="">About</a>
                        <a className='text-[#64748B]' href="">Contact</a>
                        <a className='text-[#64748B]' href="">Careers</a>
                    </div>
                    <div className='hidden md:flex flex-col gap-2'>
                        <h3 className=' font-bold '>LEGAL</h3>
                        <a className='text-[#64748B]' href="">Privacy Policy</a>
                        <a className='text-[#64748B]' href="">Terms of Service</a>
                    </div>

                </div>
                <div className="divider container mx-auto mt-10 pt-10" />
                <div className='container mx-auto px-5 md:px-0 mt-10 mb-10 flex flex-col items-center gap-4 md:flex-row md:justify-between'>
                    <p className='text-[#64748B] text-center md:text-left'>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-4 text-[#64748B] '>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;