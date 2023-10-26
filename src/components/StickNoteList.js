import React from "react";
import StickyNote from "./StickyNote";
import AddStickyNote from "./AddStickyNote";

const StickyNoteList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <>
            <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mr-auto ml-auto max-w-8xl pl-4 pr-4 pt-4 pb-4">
                <AddStickyNote handleAddNote={handleAddNote} color="bg-blue-200" hoverColor="hover:bg-blue-500" date={new Date().toLocaleDateString()}/>    
                {notes.map((note) => <StickyNote date={note.date} text={note.note} color={note.colour} id={note.id} handleDeleteNote={handleDeleteNote}/>)}
                
            </div>
        </>
    )
}

export default StickyNoteList