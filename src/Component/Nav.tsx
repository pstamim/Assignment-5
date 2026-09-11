

import Logo from '../assets/logo-text.png'
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
    return (
        <>
            <nav className='flex justify-between stack-start container mx-auto mt-8  items-center'>

                <GiHamburgerMenu className='md:hidden flex justify-end text-4xl text-[#475569]' />


                <img className='h-[40px] w-[160px]' src={Logo} alt="" />
                <ul className='hidden md:flex gap-5 text-[#475569]'>
                    <li><a className='text-[#DB2777]' href="">Home</a></li>
                    <li><a href="">Technologies</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className='flex gap-4 '>
                    <button className='cursor-pointer' >Sign In</button>
                    <button className=' bg-gradient-to-r from-[#F97316] to-[#EC4899] py-2  px-4 rounded-4xl cursor-pointer text-white' >Sign Up</button>



                </div>

            </nav>
            <div className="divider" />

        </>
    );
};

export default Nav;