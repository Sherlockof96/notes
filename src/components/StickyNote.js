import React from "react";
import {MdDeleteForever} from "react-icons/md";

const StickyNote = ({date, text, id, color, handleDeleteNote}) => {
    return (
        <>
            <div className={`whitespace-pre-wrap h-52 border-r-10 p-2 flex flex-col justify-between ${color}`}>
                <span>
                    {text}
                </span>
                <div className="flex align-middle justify-between">
                    <small>{date}</small>
                    <MdDeleteForever onClick={() => handleDeleteNote(id)} className="cursor-pointer" size="1.3em" />
                </div>
            </div>
        </>
    )
}

export default StickyNote