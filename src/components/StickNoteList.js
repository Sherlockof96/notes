import React from "react";
import StickyNote from "./StickyNote";

const StickyNoteList = ({notes}) => {
    return (
        <>
            <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mr-auto ml-auto max-w-8xl pl-2 pr-2">
                {notes.map((note) => <StickyNote date={note.date} text={note.text} color={note.color} nodeid={note.id}/>)}
            </div>
        </>
    )
}

export default StickyNoteList