import { useState } from "react";
import { SlArrowRight,SlArrowLeft } from "react-icons/sl";
import { GoCircle } from "react-icons/go";
import './CalendarVies.css'
const CalendarView=()=>{
     const [current,setCurrent]=useState(new Date())
     

  const decrese=()=>{
    let val=new Date(current)
    val.setMonth(val.getMonth()-1)
    setCurrent(val)
  }
  const increase=()=>{
       let val=new Date(current)
    val.setMonth(val.getMonth()+1)
    setCurrent(val)
  }





     const month = current.toLocaleString('default', { month: 'long' });
     const year=current.getFullYear()
     const days=new Date(year,current.getMonth()+1,0).getDate()
     const day=new Date(year,current.getMonth()+1,1).getDay()
    
     const complete=[]
     for(let i=0;i<day;i++){
        complete.push(' ')
     }
     let j=1;
     while(j<=days){
        complete.push(j)
        j++;
     }
    




     return (
        <div className="calendar-container">
            <div className="medication-calendar">
                <span className='medication'>Medication Calendar </span>
                <div className="month-container">
                    <button onClick={decrese}><SlArrowLeft /></button>
                    <span className="month">{month} {year}</span>
                    <button onClick={increase}><SlArrowRight/></button>
                </div>
                <div className="numbers-container">
                   <table>
                      <th className="th-container">
                        <tr>Su</tr>
                        <tr>Mn</tr>
                        <tr>Tu</tr>
                        <tr>We</tr>
                        <tr>Tr</tr>
                        <tr>Fr</tr>
                        <tr>Sa</tr>
                      </th>
                      <tb>
                        {complete.map(eachitem=>{
                            return (
                             <button className="fixed">{eachitem}</button>
                            )
                        })}
                      </tb>
                   </table>
                   <div className="lists-displeyed">
                     <p><GoCircle className="icon-go"/><span>  Medication taken</span></p>
                       <p><GoCircle className="icon-red"/><span> Missed medication</span></p>
                         <p><GoCircle className="icon-blue"/><span>  Today</span></p>
                 </div>
                </div>
            </div>
        </div>
     )
}
export default CalendarView