import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Note(props){
    return(
        <div className="note">
        <p>{props.idNum+1}</p>
        <p>{props.title}</p>
        <p>{props.content}</p>
         <button onClick={()=>{props.onDeleteClick(props.idNum)}}>
         {/* <i className="far fa-trash-alt"></i> */}
         {/* <DeleteOutlineIcon/> */}
         < DeleteIcon />

         </button>
        </div>
    )
};
export default Note;