import {Link} from 'react-router-dom';


function Navbar(){

    return(
        <div>
        <nav >
            <ul>
                <li><Link to='/'><button class="button button-nav">Home</button></Link></li>
                <li><Link to='/about'><button class="button button-nav">About</button></Link></li>
            </ul>
        </nav>

    </div>
    )
    
    
}

export default Navbar;