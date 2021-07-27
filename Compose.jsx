import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';

// import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Zoom from '@material-ui/core/Zoom';
function Compose(props){
    const [note, setNote]= useState({"title": "","content": ""});
     const [isTitleClicked,setTitleClicked]= useState(false);


     function handleTitleClicked(event){
         setTitleClicked(true);
         console.log("title clicked");
         handleChange(event);
     }

    function handleChange(event){
        const {name,value}= event.target;
        // setNote(value);
        setNote((prevNotes)=>{
           return{...prevNotes,[name]:value
               
           } 

       });
    }
        return (    
            <div>
               {(!isTitleClicked )?

            <form className="create-note" >
               <input onClick = {handleTitleClicked} type = "text" placeholder="Take a note"   name ="title" 
                value= {note.title} 
               /></form> :

        <form className="create-note">
               <input onChange = {handleChange} type = "text" placeholder="Title"   name ="title" 
                value= {note.title} 
               />
        
              <textarea  onChange = {handleChange} type = "textarea" placeholder="Add Content here" name ="content"
                value ={note.content} rows='3'
                 />
            <Zoom in ={isTitleClicked}>
               <Fab onClick={(event)=>{props.onAddClick(note);
                      setNote({"title": "","content": ""});
                       event.preventDefault();

                 }}><  AddCircleIcon  />
                
                 </Fab></Zoom>
         </form>   }
        </div>
    )         
    };
export default Compose;