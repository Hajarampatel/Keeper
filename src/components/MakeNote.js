
import React, {  useState } from "react";
import {Button}  from "@material-ui/core"
import { Delete } from "@material-ui/icons";
import {Add} from "@material-ui/icons";

function MakeNote() {

const Localdata = () => { 
  let datta = JSON.parse(localStorage.getItem('dd'));
console.log(datta);

if(datta) { return datta;}
else { return [];}

}

const [Title,setTitle]=useState(Localdata());
const [Data, setData] = useState({
title : '',
content : '',
});
 
function setT(event){

    const name= event.target.name;
    const value= event.target.value;

   setData(old => {
   if(name==='title'){
    return { title : value, content : old.content}
   }
   else if (name==='content'){
    return { title : old.title, content: value}
   }
    
   })
}
  function add() {
  
         if (Data.title === '' || Data.content === ''){}
         else { 
    setTitle(old=>{
        localStorage.setItem('dd' , JSON.stringify([...old,Data]));
        
        return [...old,Data];
    });

setData({title : '', content : ''});
  }
    // notes.push(Data);
    // console.log(Title);
    // console.log(Data);
    // console.log(notes);
    // console.log(notes);
    // console.log(Title);
  }

    function remove(id) {
      let ld = JSON.parse(localStorage.getItem('dd'));
      // const filtered = ld.filter(item => {
      //   return item.id !== id;
      // })
      ld.splice(id, 1);
      localStorage.setItem('dd' , JSON.stringify(ld));
      setTitle(old=>{
        return [...ld];
    });

    }
    

 return ( 
  <body>

 
 <div className="abc">
 <div className="inputMain">
    <div className="noteInputMain">
      <h1 className="h111">Make A Note</h1>
<input value={Data.title} type="text" id="tittle" name='title' onChange={setT}  required placeholder="Title" autoFocus/>
<input value={Data.content} type="text" name='content' onChange={setT}  required  placeholder="Content"/>
 <Button  variant="outlined"  onClick={()=>{add()}} style={{ marginLeft : '60px',height:'55px',  width: '20px', borderRadius:'50%', color: '#f5ba13' }}><Add style={{fontSize : '2.5rem'}} /></Button>
  {/* backgroundColor: "#f5ba13"  */}
    </div>
    </div>
    <div className="aa">
  {Title.map((props, index )=> 
  <div className="note" key={index}>
    
   <h1 className="h1Title" >{props.title}</h1>
  <p className="h1Title" >{props.content}</p>
  <div className="buttn"> <Button  onClick={()=>remove(index)} className="buttonfinal" color="secondary" style={{ marginLeft : '150px' }}><Delete /></Button></div>
  </div>
     )}
    
     </div>
     </div>
     {/* <footer className="con" >
      <p>Copyright ⓒ </p>
      </footer> */}
     </body>
     )
}

export default MakeNote;