
import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        <>
        <div className="divider mt-10 pt-10" />
            <div className='flex justify-between container mx-auto mt-30'>
                <div className='flex flex-col space-y-6'>
                    <img className='h-[40px] w-[160px]' src={Logo} alt="" />
                    <p className='text-[#64748B]'>Curated tools, technologies, and resources for developers building <br />
                        modern software.</p>
                    <ul className='flex gap-4 font-bold mt-10'>
                        <li><a href="">GitHub</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">LinkedIn</a></li>
                    </ul>
                </div>
                <div className=' flex flex-col gap-2'>
                    <h3 className=' font-bold '>PRODUCT</h3>
                    <a className='text-[#64748B]' href="">Home</a>
                    <a className='text-[#64748B]' href="">Technologies</a>
                    <a className='text-[#64748B]' href="">Projects</a>

                </div>
                <div className='flex flex-col gap-2 '>
                    <h3 className=' font-bold '>COMPANY</h3>
                    <a className='text-[#64748B]' href="">About</a>
                    <a className='text-[#64748B]' href="">Contact</a>
                    <a className='text-[#64748B]' href="">Careers</a>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className=' font-bold '>LEGAL</h3>
                    <a className='text-[#64748B]' href="">Privacy Policy</a>
                    <a className='text-[#64748B]' href="">Terms of Service</a>
                </div>

            </div>
            <div className="divider container mx-auto mt-10 pt-10" />
            <div className='flex justify-between container mx-auto mt-20 mb-10'>
                <p className='text-[#64748B]'>© 2026 Dev Stack. All rights reserved.</p>
                <div className='flex gap-4 text-[#64748B]'>
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                </div>
            </div>
        </>
    );
};

export default Footer;