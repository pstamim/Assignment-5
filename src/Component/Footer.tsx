
import Logo from '../assets/logo-text.png'
const Footer = () => {
    return (
        
            <div className='flex justify-between'>

                <img className='h-[40px] w-[160px]' src={Logo} alt="" />
                <p>Curated tools, technologies, and resources for developers building
                    modern software.</p>
                <ul className='flex justify-center'>
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>

                <h3>PRODUCT</h3>
                <a href="">Home</a>
                <a href="">Technologies</a>
                <a href="">Projects</a>


                <h3>COMPANY</h3>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Careers</a>


                <h3>LEGAL</h3>
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>


            </div>
            );
};

            export default Footer;