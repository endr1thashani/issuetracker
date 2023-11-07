'use client'
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import { useForm , Controller } from 'react-hook-form'
import axios from 'axios'
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';

interface IssueForm {
    title : String;
    description : String;
}


const NewIssuePage = () => {
    const router = useRouter()
    const { register , control , handleSubmit } = useForm<IssueForm>()
  return (
    <form className='max-w-xl mx-auto space-y-3 px-5' onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/issues', data)
        router.push('/issues')
    })}>
        <TextField.Root>
            <TextField.Input placeholder='Title' {...register('title')}/>
        </TextField.Root>
        <Controller 
            name = "description"
            control={control}
            render={(field) =>  <SimpleMDE placeholder='Description' {...field } />}
        />
        <Button>Submit New Issue</Button>
    </form>
  )
}

export default NewIssuePage