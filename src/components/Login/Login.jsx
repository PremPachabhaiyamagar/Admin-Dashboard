import './Login.css';
import infinity from '../../Assets/infinity.png';
import alert from '../../Assets/alert.png';
import {auth} from "../Firebase/Firebase";
import { useState } from 'react';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {signInWithEmailAndPassword} from "firebase/auth";


const Login = () => {
   const [NewUser,setNewUser] = useState(true);
   const [email,setemail] = useState("");
   const [password ,setpassword] = useState("");
   const [username ,setusername] = useState("");
   const [error,seterror] = useState(false);
   const [ErrorMsg , setErrorMsg] = useState(false);
   

   const submit = (e) =>{
    e. preventDefault();
    seterror(false);

     if(NewUser)
     {
      createUserWithEmailAndPassword(auth,email,password)
       .then(()=>{
         localStorage.setItem("username",username);
       })
       .catch((error)=>{
        seterror(true);
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
      
     }
     else
     {
      signInWithEmailAndPassword(auth,email,password)
      .then((userDetails)=>{
        console.log(userDetails)
      })
      .catch((error)=>{
        seterror(true);
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      })

     }
   }
  return (
    <div className='login-page'>
      <header>
        <span>From <i>Infinite Studio</i></span>
      </header>
       

       <img src={infinity} alt='infinity' className='logo'></img>
       <h2 className='title'>Sub-Min<br/>Dashboard</h2>


       <form onSubmit={submit}>

       {NewUser && (<>
        <div className='username'>
          <input
            onChange={(e)=>setusername(e.target.value)}
            type='username'  
            id='username' 
            required />
          <label htmlFor='username'>username</label>
        </div>
       </>)}


       <div className='email'>
        <input 
          onChange={(e)=>setemail(e.target.value)}
          type='email' 
          id='email' 
          required />
        <label htmlFor='email'>email</label>
       </div>

       <div className='password'>
        <input 
          onChange={(e)=>setpassword(e.target.value)}
          type='password'  
          id='password' 
          required />
        <label htmlFor='password'>password</label>
       </div>


       
       <div className='error'>
        {error && (<img src={alert} alt='alert' className='status'/>)}

         {error && (<span className='err-Msg'>Process faild</span>)}
         {error && (<span className='err-Msg'>{ErrorMsg}</span>)}
       </div>
       

       <button type='submit'>{NewUser ? "Sign in" : "Log in"}</button>


        {NewUser ? 
        (<span className='user-state'>Already have an account ? <b onClick={()=>{
          setNewUser
          (false)
          seterror(false)
         }}>Log In</b></span>)
        :
        (<span className='user-state'>Don't have an account ? <b 
         onClick={()=>{
          setNewUser
          (true)
          seterror(false)
         }}
        >Sign In</b></span>
        )}

       </form>
    </div>
  )
}

export default Login
