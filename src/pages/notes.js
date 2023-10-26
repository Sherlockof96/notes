import Head from 'next/head'
import { useState, useEffect, use } from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import StickyNoteList from '@/components/StickNoteList'
import Cookies from 'js-cookie'
import SearchBar from '@/components/SearchBar'

export  default function Notes() {

    const userHash = Cookies.get('UserId');
    const [notes, setNotes] = useState([]);

    const getNotes = async () => {

          
        const response = await fetch(`https://loginlogoutbackend.azurewebsites.net/notes/get`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: userHash
        });

        const map = new Map(Object.entries(await response.json()));
        const result = Array.from(map.values());
        console.log(result);
        setNotes([
            ...result
        ]);
    }

    const handleAddNote = async (note, colour) => {

        const data = {
            note: note,
            date: new Date().toLocaleDateString(),
            id: 1,
            colour: colour,
            userhash: userHash
        }

        await fetch('https://loginlogoutbackend.azurewebsites.net/notes/add', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        await getNotes();
    }

    const handleDeleteNote = async (id) => {

        const data = {
            id: id,
            userhash: userHash
        }
        await fetch('https://loginlogoutbackend.azurewebsites.net/notes/delete', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        await getNotes();
        
    }

    const handleChangeColour = async (id, colour, note) => {
            
            const data = {
                id: id,
                colour: colour,
                note: note,
                date : new Date().toLocaleDateString(),
                userhash: userHash
            }
    
            await fetch('https://loginlogoutbackend.azurewebsites.net/notes/update', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            await getNotes();
    }

    useEffect(() => {
        getNotes();
    }, []);

    const [searchText, setSearchText] = useState('');

    return (
        <>
            <Head>
                 <title> Kavish | Notes</title>
                <meta name="description" content='Notes Page' />
            </Head>
            <TransitionEffect />

            <main className='text-dark w-full min-h-screen dark:text-light'>
                <SearchBar handleSearchNote={setSearchText} />
                <StickyNoteList notes={notes.filter((note)=>note.note.toLowerCase().includes(searchText))} handleChangeColour={handleChangeColour} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote}/>
            </main>
        </>
    )
}