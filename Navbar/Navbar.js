import React,{useState} from 'react';
import './Navbar.css';
import { Link,NavLink } from 'react-router-dom';


const Navbar = () => {



  const redirect = () => {
    window.location.href = "mailto:pradeeparunachalam16@gmail.com?subject=Hello&body=Hi, I’d like to get in touch with you!";
  };  
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div>
        <div className='Appbar'>
           
            <Link to='/' className='Name'>PRADEEP</Link>
            <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
          
            <ul className={menuOpen ? "open" : ""}>
                <li><NavLink to = '/'>Home</NavLink></li>
                <li><NavLink to = '/Projects'>Projects</NavLink></li>
                <li><NavLink to = '/Skills'>Skills</NavLink></li>
                <li><Link onClick={redirect}>Contact</Link></li>
                
            </ul>
          </div> 
        </div>
        
   
  );
}

export default Navbar