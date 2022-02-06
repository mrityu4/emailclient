import { DETAILS } from '../../assets/constants';
import './DetailView.css';

function DetailView({currentMail}) {

    return (
      <div className="detailview">
        <div className='name'>{DETAILS[currentMail].name}</div>
        <div className='from'>{DETAILS[currentMail].from}</div>
        <div className='sub'>Sub: {DETAILS[currentMail].sub}</div>
        <div className='sent-date'>Sent: {DETAILS[currentMail].sentDate}</div>
        <div className='rec-date'>Rec: {DETAILS[currentMail].receiveDate}</div>
        <div className='text'>{DETAILS[currentMail].text}</div>
      </div>
    )
  }
  
  export default DetailView
  