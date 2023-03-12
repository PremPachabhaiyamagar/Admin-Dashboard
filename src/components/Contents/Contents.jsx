import { useContext, useState ,useEffect} from 'react';
import './Contents.css';
import { ThemeContext } from '../../ThemeContext';
import Card from '../Cardtamplets/Card';

// importing react icons
import { RiSettingsLine, RiToolsLine } from 'react-icons/ri';
import {TbSettings} from 'react-icons/tb';
import{BiMessageRounded} from 'react-icons/bi';
import {AiOutlineUserAdd,AiFillFacebook,AiFillTwitterCircle,AiOutlineMail} from 'react-icons/ai';
import {AiOutlineUsergroupAdd ,AiOutlineLike,AiOutlineUserSwitch,AiOutlineEdit} from 'react-icons/ai';
import {RiChat3Line,RiMailSettingsLine,RiListSettingsLine,RiFileSettingsLine,RiFolderSettingsFill} from 'react-icons/ri';
import {IoCashOutline,IoSettingsOutline} from 'react-icons/io5';
import Analytics from '../Analytics/Analytics';
import img from '../../Assets/illustration.jpg';
import {GiSettingsKnobs} from 'react-icons/gi';
import {BsWhatsapp} from 'react-icons/bs';
import CircularProgress from '../circularProgress/CircularProgress';
import image from '../../Assets/prem.jpg';


const Contents = () => {
  const {DarkTheme} = useContext(ThemeContext);
  const [username ,setusername] = useState("");

  // for the first progress 
  const [value_1] = useState(Math.floor(Math.random() * 100));
  const [offset] = useState( 315 - ( value_1 / 100 ) * 315 );

  // for the second progresss
  const [value_2] = useState(Math.floor(Math.random() * 100));
  const [offset_2] = useState( 315 - ( value_2 / 100 ) * 315 );  

  const [value_3] = useState(Math.floor(Math.random() * 100));
  const [offset_3] = useState( 315 - ( value_3 / 100 ) * 315 ); 

  const [value_4] = useState(Math.floor(Math.random() * 100));
  const [offset_4] = useState( 315 - ( value_4 / 100 ) * 315 ); 


  const [value_5] = useState(Math.floor(Math.random() * 100));
  const [offset_5] = useState( 315 - ( value_5 / 100 ) * 315 ); 

  useEffect(()=>{
    setusername(localStorage.getItem("username"));
  },[])
  return (
    <div className={`contents ${DarkTheme && "dark"}`}>
     <div className='row header'>
      <TbSettings className='cog' />
       <h1 className='txt-header'>Current Notifications</h1>

        <div className='differencer'></div>

         <div className='notifications'>
           <BiMessageRounded />
           <AiOutlineUserAdd />
           <BiMessageRounded />
           <BiMessageRounded />
           <BiMessageRounded />
        </div>

      <svg
          className='bg-waves_'
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '100%', height: 42, }}
        >
        <path
        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
        opacity=".25"
        />
        <path
        d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
        opacity=".5"
        />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>
     </div> 
     <div className='row header'>
      <Card Icon={AiOutlineUsergroupAdd} title="Followers" value="none : )" />
      <Card Icon={AiOutlineLike} title="Messages" value=":+0" />
      <Card Icon={RiChat3Line} title="Likes" value=":+0" />
      <Card Icon={IoCashOutline} title="Earnings" value="none :$0.00 )" />
       <svg
          className='bg-waves__'
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '100%', height: 42, transform: 'rotate(180deg)' }}
          >
          <path
          d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
          opacity=".25"
         />
         <path
         d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
         opacity=".5"
         />
         <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
         </svg>
     </div> 


     <span className='description-section'>Brief Description</span>    

     <div className='row square'>
      <Analytics chart_i className='chart_b' />
     </div>

     <div className='row square'>
     <Analytics chart_ii />
     </div>

     <div className='row square'>
     <Analytics chart_iii />
     </div>

     <div className='row square'>
     <Analytics title="New Followers" value="+0" illustration={img} />
     </div>

     <span className='description-section'>Analytic Tools</span>

     <div className='row tall-square'>
      <span className='tool-section'>Frequently Used</span>

      <div className='tools'>
        <Card Icon={RiToolsLine}/>
        <Card Icon={IoSettingsOutline}/>
        <Card Icon={AiOutlineUsergroupAdd}/>
        <Card Icon={RiToolsLine}/>
        <Card Icon={RiMailSettingsLine}/>
        <Card Icon={RiListSettingsLine}/>

        <div className='divider'></div>

        <span className='next-section'>More Tools</span>

        <div className='tools'>
        <Card Icon={RiToolsLine}/>
        <Card Icon={IoSettingsOutline}/>
        <Card Icon={AiOutlineUsergroupAdd}/>
        <Card Icon={RiToolsLine}/>
        <Card Icon={RiListSettingsLine}/>
        <Card Icon={RiToolsLine}/>
        <Card Icon={IoSettingsOutline}/>
        <Card Icon={AiOutlineUsergroupAdd}/>
        <Card Icon={RiMailSettingsLine}/>
        </div>
        <div className='divider'></div>

        <span className='next-section'>Advanced Tools</span>

         <div className='tools'>
         <Card Icon={RiFileSettingsLine}/>
         <Card Icon={RiFolderSettingsFill}/>
         <Card Icon={RiSettingsLine}/>
         </div>
         <svg
          className='bg-waves_'
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '100%', height: 42, }}
        >
        <path
        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
        opacity=".25"
        />
        <path
        d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
        opacity=".5"
        />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>
      </div>
     </div>
     <div className='row tall-square inv-bg '>
      <header className='tall-square-header'>
        <div className='left'>
          <AiOutlineEdit className='icon'/>
        </div>
        <div className='right'>
          <GiSettingsKnobs className='icon'/>
          <RiChat3Line className='icon' />
          <AiOutlineUserSwitch className='icon' />
        </div>
      </header>
       <div className='Admin'>
         <div className='profile'>
           <img src={image} alt='user-photo'/>
         </div>
       <div className='user-info'>
          <span className='user-name'>{username}</span>
          <p className='profession'>Full Stack Developer and Content Creator</p>
       </div>
       <div className='social-media-icons'>
       <Card Icon={BsWhatsapp}/>
       <Card Icon={AiFillFacebook}/>
       <Card Icon={AiFillTwitterCircle}/>
       <Card Icon={AiOutlineMail}/>
       </div>
       </div>
     <svg
          className='bg-waves__'
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: '#ffffff', width: '100%', height: 42, transform: 'rotate(180deg)' }}
          >
          <path
          d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
          opacity=".25"
         />
         <path
         d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
         opacity=".5"
         />
         <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
     </svg>
     </div>

     <div className='row side-rect'>
      <section>
      <CircularProgress color='#810551' value={value_1} offset ={offset} />
        <div className='summary'>
         <h2 className='summary-title'>Performance</h2>
          <span className='summary-info'>
          A performance is an act of staging or presenting a play, concert, or other form of entertainment. It is also defined as the action or process of carrying out or accomplishing an action, task, or function.
          </span>
        </div>
        <CircularProgress color='#054054' value={value_2} offset ={offset_2} />
      </section>
     </div>
     <div className='row side-rect'>
      <section>
       <CircularProgress color='aqua' value={value_3} offset ={offset_3} />
        <div className='description-section'>
          <h1 className='description-heading'>Detailed Analysis</h1>
           <span className='description-info'>
           management of complex processes, interpersonal adaptability, cultural adaptability, and physical fitness.Performance is not always a result of practice, but rather about in a skill.on.
           </span>
        </div>
           <CircularProgress color='red' value={value_4} offset ={offset_4} />
      </section>
     </div>
     <div className='row side-rect'>
     <section>
      <CircularProgress color='lime' value={value_5} offset ={offset_5} />
        <div className='summary'>
         <h2 className='summary-title'>Summary</h2>
          <span className='summary-info'>
          A performance is an act of staging or presenting a play, concert, or other form of entertainment. It is also defined as the action or process of carrying out or accomplishing an action, task, or function.
          </span>
        </div>
        <CircularProgress color='yellow' value={value_2} offset ={offset_2} />
      </section>
     </div>
    </div>

    
  )
}

export default Contents
