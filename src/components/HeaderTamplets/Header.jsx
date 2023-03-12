import { useContext, useState } from 'react';
import './Header.css';
import { ThemeContext } from '../../ThemeContext';
import {signOut} from 'firebase/auth';
import {auth} from "../Firebase/Firebase";

// importing react icons
import {BiSearchAlt} from 'React-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {RiSettingsLine } from 'react-icons/ri';
import {IoAnalytics} from 'react-icons/io5';
import {TbMessages} from 'react-icons/tb';
import {HiOutlineMoon,HiOutlineLogout} from 'react-icons/hi';
import image from '../../Assets/prem.jpg';

const Header = () => {
  const { DarkTheme , setDarkTheme} = useContext(ThemeContext);

  function changeTheme(){
    setDarkTheme(!DarkTheme)
  }
  const logout = ()=>{
    signOut(auth);
  }
  return (
  <header className={`${DarkTheme && "dark"}`}>
      <div className='search-bar'>
        <input type='text' placeholder='Search....'/>
        <BiSearchAlt className="icon" />
      </div>
      <div className='tools'>
         <AiOutlineUser className="icon"/>
         <TbMessages className="icon"/>
         <IoAnalytics className="icon"/>

         <div className="seperator"></div>
         <HiOutlineMoon className="icon" onClick={changeTheme}/>
         <RiSettingsLine className="icon"/>
         <HiOutlineLogout className="icon" onClick={logout}/>

         <div className="seperator"></div>

         <div className='profile'>
          <img src={image} alt='userphoto' className='profile-img'/>
        </div>
       </div>
    <button className='toggleMenu' type='button'>|||</button>
  </header>
  )
}

export default Header
