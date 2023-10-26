import React from "react";
import {MdDeleteForever, MdEdit, MdPalette} from "react-icons/md";
import DropDownColor from "./DropdownColor";

const StickyNote = ({date, text, id, color, handleDeleteNote, handleChangeColour}) => {

    const colorChange = async (colour) => {
        await handleChangeColour(id, colour, text);
    }

    return (
        <>
            <div className={`whitespace-pre-wrap h-52 border-r-10 p-2 flex flex-col justify-between ${color}`}>
                <span className="m-1">
                    {text}
                </span>
                <div className="flex align-middle justify-between">
                    <small>{date}</small>
                    <div className="flex ">
                        < DropDownColor handleChangeColour={colorChange}/>
                        <MdEdit className="cursor-pointer justify-self-end mr-2" size="1.3em" />
                        <MdDeleteForever onClick={() => handleDeleteNote(id)} className="cursor-pointer" size="1.3em" />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default StickyNote