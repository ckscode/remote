import React, { useEffect, useRef, useState } from 'react'
import Logo from '../images/logo.svg'
import {Dropdown,SideDrop} from './Dropdown'
import menu from "../images/menu.svg"
import close from "../images/close.svg"
import './Navbar.css'
const Navbar = () => {
    const [click,setClick]=useState(false)
    const [item,setItem]=useState('')
    const [sidebar,setSidebar]=useState(false)
     let menuRef=useRef()
      let sidebarRef=useRef()
     useEffect(()=>{
        let handler=(event)=>{
            if(!menuRef.current.contains(event.target)){
                setClick(false)
            }
        }
        document.addEventListener('click',handler)
        return ()=>{
            document.removeEventListener('click',handler)
        }
     })
   
  return (
    <div ref={menuRef} className='navbar'>
        
        <nav >
        <div  className='nav-div'> 
         
        <img src={Logo} alt=""/>
        <div className='menus'>
        <p   onClick={()=>{setItem('feature'); setClick(true)}} >
            Features<i  className={click && item==='feature' ?'icon down':'icon up'}></i>
            </p>
       
        <p  onClick={()=>{setItem('company'); setClick(true)}} >Company
             <i className={click && item==='company' ?'icon down':'icon up'}></i></p>
           
        <p>Careers</p>
        <p>About</p>
        {click && item==='feature'?<Dropdown need={item}/>:''}
        {click && item==='company'?<Dropdown need={item}/>:''}
        </div>
       
    
       
        
        <div className='menubtn' onClick={()=>setSidebar(true)}>
            <img src={menu} alt=""/></div>
        
        </div>
        <div  className='nav-div2'>
        <p>Login </p>
        <button>Register</button></div> 
        {sidebar===true ?
         <div className='modal'>
         <div ref={sidebarRef} className='sidebar'>
         <div className='sidebarcnt'>
            <div  className='closebtn' >
                <img onClick={()=>setSidebar(false)} src={close} alt=""/></div>
         <p onClick={()=>{setItem('feature'); setClick(!click)}} >
         Features<i  className={click && item==='feature' ?'icon down':'icon up'}></i>
         </p>
         {click && item==='feature'?<SideDrop need={item}/>:''}
     <p onClick={()=>{setItem('company'); setClick(!click)}} >Company
          <i className={click && item==='company' ?'icon down':'icon up'}></i></p>
          {click && item==='company'?<SideDrop need={item}/>:''}
     <p>Careers</p>
     <p>About</p>
     <div className='login'>
        <p style={{justifyContent:'center',marginBottom:0}}>Login</p>
        <button>Register</button>
     </div>
    
         </div>
         </div>
     </div>:''}
       
        </nav>
        
        </div>
  )
}

export default Navbar