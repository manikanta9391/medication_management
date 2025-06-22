import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuUsers } from "react-icons/lu";
import RecentActivity from '../../pages/RecentActivity';
import OverView from '../../pages/OverView';
import CalendarView from '../../pages/CalendarView.jsx';
import Navbar from '../Navbar/navbar';
import { useUser } from '../../UserContext/userContext.jsx';
import './index.css'



const CareTakerDashboard=()=>{
    const [name,setName]=useState('manikanta')
    const [percentage,setPercentage]=useState(85)
    const [Streak,setStreak]=useState(5)
    const [missed,setMissed]=useState(3)
    const [taken,setTaken]=useState(4)
    const navigate=useNavigate()
    const {isLoggedIn}=useUser();
    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login');
        }
      }, [isLoggedIn, navigate]);
    
      if (!isLoggedIn) return null;

    return (
        <div className='dashboard'>
           <div className='first-containe'>
                <div className='icon-containe'>
                    <LuUsers className='icon1'/>
                </div>
                <div className='taker-container'>
                    <span className='takerheading'>Caretaker Dashboard</span><br/>
                    <span className='name-taker'>Monitoring {name}'s Medication adherence</span>
                </div>
           </div>
           <div className='second-container'>
              <div className='montiring-dashboard'>
                 <span className='percentage'>{percentage}%</span>
                 <span className='naming'>Adherence Rate</span>
              </div>
              <div className='montiring-dashboard'>
                 <span className='percentage'>{Streak}</span>
                 <span className='naming'>Current Streak</span>
              </div>
              <div className='montiring-dashboard'>
                <span className='percentage'>{missed}</span>
                 <span className='naming'>Missed This Month</span>
              </div>
              <div className='montiring-dashboard'>
                <span className='percentage'>{taken}</span>
                 <span className='naming'>Taken This Week</span>
              </div>
           </div>
        </div>
    )
}

const CareTaker=()=>{
  const [buttonvalue,setButtonvalue]=useState('Overview')

    const buttonFunctionality=()=>{
        return (
         <div className='buttons'>
            <button className={buttonvalue==='Overview'?'click-background':'button-background'}   onClick={()=>setButtonvalue('Overview')}>Overview</button>
            <button className={buttonvalue==='RecentActivity'?'click-background':'button-background'} onClick={()=>setButtonvalue('RecentActivity')}>RecentActivity</button>
            <button className={buttonvalue==='CalendarView'?'click-background':'button-background'} onClick={()=>setButtonvalue('CalendarView')}>Calendar View</button>
            <button className={buttonvalue==='Notifications'?'click-background':'button-background'} onClick={()=>setButtonvalue('Notifications')}>Notifications</button>
        </div>
       )
    }

     return(
        <div className='caretaker-container'>
         <Navbar />
           <div className='caretaker'>
              {CareTakerDashboard()}
           </div>
           <div className='buttons-container'>
               {buttonFunctionality()}
           </div>
           <div className='displyed-container'>
            {buttonvalue==="CalendarView" && <CalendarView />}
             {buttonvalue==="RecentActivity" && <RecentActivity />}
             {buttonvalue==="Overview" && <OverView />}
             
             
           </div>
        </div>
     )

}
export default CareTaker