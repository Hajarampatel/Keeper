import React from "react";
// import notes from '../notes';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

// import DeleteIcon from '@mui/icons-material/Delete';



// console.log(notes);

function Note(props) {
    // const LocData = localStorage.getItem(JSON.parse('dd'));

  //   function remove (){
  // console.log(LocData);
  //   }


  return (
    
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button className="buttonfinal">-</button>
  </div>
  )
}

export default Note;