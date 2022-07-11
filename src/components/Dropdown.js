import React from 'react'
import { Link } from 'react-router-dom'
import "./Dropdown.css"

const content=[{
    item:'Todo List',
    class:'todo'

},{
    item:'Calender',
    class:'calender'
},
{
    item:'Reminders',
    class:'reminder'
},
{
    item:'Planning',
    class:'planning'
},]

const Dropdown = ({need}) => {
  
  
  return (
    <div>
  
    

        {need==='feature' ?<div className="link">{
             content.map((item,index)=>{
                return(
                    
                    <Link to='/' key={index}> <p><i className={item.class}></i> {item.item}</p></Link>
                )
                
            })
        }</div>:''}
       
        
        {need ==='company' ? <div className='company'>
       
       <Link to='/'> <p>History</p></Link>
       <Link to='/'> <p>Our Team</p></Link>
       <Link to='/'> <p>Blog</p></Link>
       </div>:''}
       
        </div>
  )
}

const SideDrop=({need})=>{
    return (
        <div>
      
        
    
            {need==='feature' ?<div className="link2">{
                 content.map((item,index)=>{
                    return(
                        
                        <Link to='/' key={index}> <p><i className={item.class}></i> {item.item}</p></Link>
                    )
                    
                })
            }</div>:''}
           
            
            {need ==='company' ? <div className='company2'>
           
           <Link to='/'> <p>History</p></Link>
           <Link to='/'> <p>Our Team</p></Link>
           <Link to='/'> <p>Blog</p></Link>
           </div>:''}
           
            </div>
      )

}




export {Dropdown,SideDrop}