import Head from 'next/head'
import { useState } from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import StickyNoteList from '@/components/StickNoteList'
import Cookies from 'js-cookie'

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
        const data = await response.json();
        setNotes(data);
    }

    const handleAddNote = async (note) => {

        const data = {
            note: note,
            date: new Date().toLocaleDateString(),
            id: 1,
            colour: "bg-yellow-500",
            userhash: userHash
        }

        const response = await fetch('https://loginlogoutbackend.azurewebsites.net/notes/add', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        setNotes([
            ...notes,
            data
        ]);
    }
    return (
        <>
            <Head>
                 <title> Kavish | Notes</title>
                <meta name="description" content='Notes Page' />
            </Head>
            <TransitionEffect />

            <main className='text-dark w-full min-h-screen dark:text-light'>
                <StickyNoteList notes={notes} handleAddNote={handleAddNote}/>
            </main>
        </>
    )
}