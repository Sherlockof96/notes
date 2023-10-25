import Head from 'next/head'
import { useState } from 'react'
import TransitionEffect from '@/components/TransitionEffect'
import AddStickyNote from '@/components/AddStickyNote'
import StickyNoteList from '@/components/StickNoteList'

export  default function Notes() {
    const [notes, setNotes] = useState([
        {
            text: "First note",
            date: new Date().toLocaleDateString(),
            id: 1,
            color: "bg-yellow-500"
        },
        {
            text: "Second note",
            date: new Date().toLocaleDateString(),
            id: 1,
            color: "bg-yellow-500"
        },
        {
            text: "Third note",
            date: new Date().toLocaleDateString(),
            id: 1,
            color: "bg-yellow-500"
        },
        {
            text: "Forth note",
            date: new Date().toLocaleDateString(),
            id: 1,
            color: "bg-yellow-500"
        },
        {
            text: "Fifth note",
            date: new Date().toLocaleDateString(),
            id: 1,
            color: "bg-yellow-500"
        }
    ]);
    return (
        <>
            <Head>
                 <title> Kavish | Notes</title>
                <meta name="description" content='Notes Page' />
            </Head>
            <TransitionEffect />

            <main className='text-dark w-full min-h-screen dark:text-light'>

                {/* <AddStickyNote /> */}
                <StickyNoteList notes={notes}/>

            </main>
        </>
    )
}