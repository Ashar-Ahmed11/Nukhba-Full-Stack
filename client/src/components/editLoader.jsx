import React from 'react'
import Spinner from '../components/spinner'
import NoteContext from '../context/notes/noteContext'
import { useContext } from 'react'
export default function EditLoader() {
    const context = useContext(NoteContext)
    const {editorLoader} = context
    return (
        <>
            {editorLoader&&<div style={{ alignItems: 'center' }} className='d-flex justify-content-center editLoader'>
                <Spinner />
            </div>}
        </>
    )
}