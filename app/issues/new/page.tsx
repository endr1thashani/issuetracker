'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";


const NewIssuePage = () => {
  return (
    <div className='max-w-xl mx-auto space-y-3 px-5'>
        <TextField.Root>
            <TextField.Input placeholder='Title' />
        </TextField.Root>
        <SimpleMDE placeholder='Description' />
        <Button>Submit New Issue</Button>
    </div>
  )
}

export default NewIssuePage