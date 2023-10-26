import React from "react";
import {MdDeleteForever, MdEdit, MdPalette} from "react-icons/md";
import DropDownColor from "./DropdownColor";
import { useState } from "react";

const StickyNote = ({date, text, id, color, handleDeleteNote, handleModifyContent}) => {
    const [noteText, setNoteText] = useState(text);
    const [doEdit, setDoEdit] = useState(false);
    const charLimit = 1000;

    const handleEdit = () => {
        setDoEdit(!doEdit);
    }

    const handleEditChange = (event) => {
        if(charLimit - event.target.value.length >= 0)
        {
            setNoteText(event.target.value);
        }
    }

    const colorChange = async (colour) => {
        await handleModifyContent(id, text, colour);
    }

    const modifyContent = async () => {
        await handleModifyContent(id, noteText, color);
        setDoEdit(!doEdit);
    }


    return (
        <>
            <div className={`whitespace-pre-wrap h-52 border-r-10 p-2 flex flex-col justify-between ${color}`}>
                {
                    doEdit ? (
                        <>
                        <textarea className="w-full h-full outline-none resize-none bg-blue-200" value={noteText} onChange={handleEditChange}></textarea>
                        <div className="flex align-middle justify-between">
                    <small className="dark:text-dark">{charLimit - noteText.length} Remaining</small>
                    <div className="flex ">
                        
                        <button onClick={modifyContent} className={`dark:text-dark bg-gray-100 border-none rounded-xl hover:bg-blue-500 p-1 ml-2`}>Save</button>
                    </div>
                </div>

                        </>
            
                    ) : 
                    
                    (
                        <span className="m-1 break-all">
                            {text}
                        </span>
                    )
                }
                
                <div className="flex align-middle justify-between">
                    <small>{date}</small>
                    <div className="flex ">
                        < DropDownColor handleChangeColour={colorChange}/>
                        <MdEdit className="cursor-pointer justify-self-end mr-2" onClick={() => handleEdit()} size="1.3em" />
                        <MdDeleteForever onClick={() => handleDeleteNote(id)} className="cursor-pointer" size="1.3em" />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default StickyNote