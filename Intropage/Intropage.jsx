import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import  LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import './Intropage.css';

const Intropage = () => {

 

  return (
    <div className='intro'>
        <Navbar/>
        <div  className='section-main'>
        <section>
        <div className='sectioncontent'>
          <h1 className='font1'>Hii</h1>
          <h2 className='font1'>I'am PRADEEP</h2>
          <p className='font2'>A passionate web developer with a love for React and UI design.</p>
          <div className='icons'> 
          <a className='iconsi' href="https://www.instagram.com/pradeep_g_a/" target='blank'><InstagramIcon /></a>
          <a className='iconsi' href="https://github.com/Pradeep-G-A" target='blank1'><GitHubIcon /></a>
          <a className='iconsi' href="https://www.linkedin.com/in/pradeep-ga-918897257/" target='blank'><LinkedInIcon /></a>
          </div>

          <button  className='btn-resumee'>
          <a href="/Resume.pdf" download className='btn-resume'>Resume</a>
          </button>

        </div>
        
        
        </section>
       
        <section>
          <div className='sectionimage'>
            <image src="/public/profile.png"></image>
          </div>
          </section>
        </div>
        </div>
        
  
  );
}

export default Intropage