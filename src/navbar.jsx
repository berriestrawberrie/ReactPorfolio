import {Link} from 'react-router-dom';
import Purple from './assets/purp-berrie.png';


function Navbar(){

    return(
        <header>
            <nav className="
                flex flex-wrap
                items-center
                justify-between
                w-full
                py-4
                md:py-2
                px-4
                text-lg text-gray-700
                bg-white
                absolute
                -top-24
                ">
            <div>
            
                <Link to='/'><img className='hover:hue-rotate-50' src={Purple} width="50"/></Link>
             
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                <ul className="
                    pt-4
                    text-base text-gray-700
                    md:flex
                    md:justify-between 
                    md:pt-0">
                <li>
                <Link to='/about'><span className="md:p-4 py-2 block hover:text-purple-400">About Me</span></Link>
                </li>
                <li>
                <Link to='/project'><span className="md:p-4 py-2 block hover:text-purple-400">My Projects</span></Link>
                </li>
 
               
                <li>
                    <a className="md:p-4 py-2 block hover:text-purple-400 text-purple-500" href="#">Contact Me</a>
                </li>
                </ul>
            </div>
            </nav>
        </header>
    )
    
    
}

export default Navbar;