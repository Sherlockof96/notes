import React from "react";
import {MdDeleteForever} from "react-icons/md";

const StickyNote = ({date, text, noteid, className = ""}) => {
    return (
        <>
            <div className={`h-52 border-r-10 p-2 flex flex-col justify-between ${className}`}>
                <span>
                    {text}
                </span>
                <div className="flex align-middle justify-between">
                    <small>{date}</small>
                    <MdDeleteForever className="delete-icon" size="1.3em" />
                </div>
            </div>
        </>
    )
}

export default StickyNote