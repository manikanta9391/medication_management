import { IoMdCheckmark } from "react-icons/io";
import { CiWarning } from "react-icons/ci";
import { MdOutlinePhotoCamera } from "react-icons/md";
import './RecentActivity.css'


const medicationLogs = [
  {
    date: "Monday, June 10",
    time: "8:30 AM",
    photo: true,
    status: "Completed"
  },
  {
    date: "Tuesday, June 11",
    time: "9:00 AM",
    photo: false,
    status: "Missed"
  },
  {
    date: "Wednesday, June 12",
    time: "8:15 AM",
    photo: true,
    status: "Completed"
  },
  {
    date: "Thursday, June 13",
    time: "8:45 AM",
    photo: true,
    status: "Completed"
  },
  {
    date: "Friday, June 14",
    time: "9:00 AM",
    photo: false,
    status: "Missed"
  },
  {
    date: "Saturday, June 15",
    time: "8:20 AM",
    photo: true,
    status: "Completed"
  },
  {
    date: "Sunday, June 16",
    time: "9:10 AM",
    photo: true,
    status: "Completed"
  },
  {
    date: "Monday, June 17",
    time: "8:30 AM",
    photo: true,
    status: "Completed"
  },
  {
    date: "Tuesday, June 18",
    time: "9:05 AM",
    photo: false,
    status: "Missed"
  },
  {
    date: "Wednesday, June 19",
    time: "8:40 AM",
    photo: true,
    status: "Completed"
  }
];

const RecentActivity=()=>{
    return (
        <div className='recent-history'>
            <span className='medication-heading'>Recent Medication Activity</span>
            <div>
                {medicationLogs.map((eachitem,index)=>{
                return (
                <div className="history-container" key={index}>
                   <div className="icon-displayig">
                      <div className= {eachitem.status==='Completed'?"icon-cont":'warining-cont'}>
                        {eachitem.status==='Completed'? <IoMdCheckmark className="chechmark"/>: <CiWarning  className="warning"/>}
                      </div>
                      <div>
                       <span className="date-time">{eachitem.date}</span><br/>
                       <span className="time-span">{eachitem.status==='Completed'? 'Taken at 8:30 AM': 'Medication Missed'}</span>
                     </div>
                   </div>
                <div className="tasks">
                    {eachitem.photo===true?<div className="photo-container"><MdOutlinePhotoCamera className="photo"/><span className="photo-head">Photo</span></div>: ''}
                    {eachitem.status==='Completed'?<span className="span1">Completed</span>:<span className="missed-span">Missed</span>}
                </div>
                </div>
                )
                })}
            </div>
        </div>
    )
}
export default RecentActivity