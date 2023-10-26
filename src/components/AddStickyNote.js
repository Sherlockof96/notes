import React from "react";
import { useState } from "react";
import DropDownColor from "./DropdownColor";

const AddStickyNote = ({color, hoverColor, handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const [colour, setColour] = useState('bg-yellow-400');
    const charLimit = 1000;

    const colorChange = async (colour) => {
        setColour(colour);
    }

    const handleChange = (event) => {
        if(charLimit - event.target.value.length >= 0)
        {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = async () => {
        if(noteText.trim().length > 0) 
        {
            await handleAddNote(noteText, colour);
            setNoteText('');
        }
    };
    return (
        <>
            <div className={`h-52 border-r-10 p-2 flex flex-col justify-between ${color}`}>
                <textarea value={noteText} onChange={handleChange} className={`border-none resize-none outline-none dark:text-dark ${color}`} rows="8" columns="10" placeholder="Type to add note"></textarea>
                <div className="flex align-middle justify-between">
                    <small className="dark:text-dark">{charLimit - noteText.length} Remaining</small>
                    <div className="flex ">
                        <DropDownColor handleChangeColour={colorChange} />
                        <button onClick={handleSaveClick} className={`dark:text-dark bg-gray-100 border-none rounded-xl  ${hoverColor} p-1 ml-2`}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStickyNote