import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ListView from './components/ListView/ListView'
import DetailView from './components/DetailView/DetailView'
import {useLocalStorageState} from './assets/utils/useLocalStorage.jsx'
import { DETAILS, MAIL_TYPES,MAPINGS } from './assets/constants'


function App() {

const [activeMailType, setActiveMailType] = useState(MAIL_TYPES.INBOX);
const [currentMail, setCurrentMail] = useState(MAPINGS.INBOX[0]);
const [isRead, setIsRead] = useLocalStorageState('isRead',
  Object.fromEntries(
    Object.keys(DETAILS).map(id => [id, false])
));

useEffect(()=>{
  setCurrentMail(MAPINGS[activeMailType.toUpperCase()][0]);
},[activeMailType]);

useEffect(()=>{
  setIsRead((prev) =>({...prev,[currentMail]:true}));
},[currentMail]);


  return (
    <div className="App">
     <Navbar 
        activeMailType={activeMailType}
        changeActiveMailType={setActiveMailType}
      />
     <ListView 
        activeMailType={activeMailType}
        currentMail={currentMail}
        changeCurrentMail={setCurrentMail}
        isRead={isRead}
        changeIsRead={setIsRead}
      />
     <DetailView currentMail={currentMail}/>
    </div>
  )
}

export default App
