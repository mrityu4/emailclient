import { MAPINGS , DETAILS } from '../../assets/constants';
import './ListView.css';

function ListView({
  changeCurrentMail,
  currentMail,
  activeMailType,
  isRead,
  changeIsRead
}) {

    return (
      <div className="listview">
       {activeMailType && Object.values(MAPINGS[activeMailType.toUpperCase()]).map((mailId)=>(
         <div 
              className={`list-item ${currentMail===mailId?'active':''} ${isRead[mailId]?'':'not-read'}`}
              key={mailId} 
              onClick={()=>{
                changeCurrentMail(mailId);
                if(!isRead[mailId]){
                  changeIsRead((prev) =>({...prev,[mailId]:true}));
                }
              }}
          >{mailId}
            <div className='from'>{DETAILS[mailId].from}</div>
            <div className='subject'>{DETAILS[mailId].sub}</div>

         </div>
       ))}
      </div>
    )
  }
  
  export default ListView
  