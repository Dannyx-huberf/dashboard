import { Link,useLocation } from 'react-router-dom';

import jeremy from '../assets/images/image-jeremy.png';
import '../styles/header.css'
export default function Header(){
const navlinks = [
  { name: 'Daily', path: '/',id: 1 },
  { name: 'Weekly', path: '/weekly', id: 2 },
  { name: 'Monthly', path: '/monthly', id: 3 },
];

const location = useLocation();

  return(
    <>
    <section className='bg-navy-900 rounded-3xl mb-6 '>
      <div className='rounded-3xl bg-topColor p-5 flex md:flex-col md:justify-center md:items-start md:w-auto gap-6 justify-between items-center lg:h-[70%]'>
        <img src={jeremy} alt="jeremy" className='w-20 h-20 object-cover border-4 border-white rounded-[40px] lg:mb-7'/>
        <div className='grow'>
          <p className='font-project text-[14px] text-gray-400 font-[600]'>Report For</p>
          <p className='font-project text-2xl lg:text-3xl text-gray-200 font-light md:whitespace-pre-line leading-[40px]'>Jeremy <br className='hidden lg:block'/> Robson</p>
        </div>
      </div>
        <nav className='flex lg:flex-col lg:items-start lg:gap-4 justify-between items-center p-7 nav-container ' >
          {navlinks.map((link)=>
            <Link to={link.path} key={link.id} className={`text-gray-200 font-project text-[18px] font-[300] cursor-pointer nav-links ${
              location.pathname === link.path ? 'active-link' : ''
            }`}>
              {link.name}
            </Link>
          )}
        </nav>
        
    
    </section>
    </>
  )
}