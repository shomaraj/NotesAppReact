import React, { useState } from 'react';
import Note from "./Note";
import Header from "./Header";
import Footer from './Footer';
// import notes from './notes';
import Compose from './Compose';

// using arrow fuction 


function App(){

  const[notes,setNotes]= useState([]);
  
    function addNotes(note){            
        setNotes((prevNotes)=>{
            return(
                [...prevNotes, note])     // 
            
        });
        
    }
    
    function deleteNote(idNum){
       setNotes((prevNotes)=>{
         return prevNotes.filter((note,index) => {
             return index !== idNum;
           });
                  
       });
    }
        return( <div>
    
            <Header/>
            <Compose 
              onAddClick ={addNotes} 
            />

            {notes.map((note,index)=> {   
            return(
              
              <Note
               idNum={index}
               key={index}
               title={note.title}
               content={note.content}
               onDeleteClick={deleteNote}
             />
             );
           }) }

            <Footer/>
        </div>
    
        )
    };
    export default App;




