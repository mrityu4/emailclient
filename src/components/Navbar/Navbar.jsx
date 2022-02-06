import { MAIL_TYPES } from '../../assets/constants';
import './Navbar.css';

function Navbar({activeMailType,changeActiveMailType}) {
    return (
      <div className="navbar">
          {Object.entries(MAIL_TYPES).map(([key, value]) => (
              <div 
                className={`mail-type ${activeMailType===value ?'active':''}`}
                key={key}
                onClick={()=>{changeActiveMailType(value)}}
              >
                {value}
              </div>
          ))}
      </div>
    )
}
  
export default Navbar