"use client"

import React from "react"
import { useState } from "react"
import { AiFillMail } from 'react-icons/ai'
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button,
} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
  
    const handleNameChange = (e:any) => setName(e.target.value)
    const handleSubjectChange = (e:any) => setSubject(e.target.value)
    const handleEmailChange = (e:any) => setEmail(e.target.value)
    const handleMessageChange = (e:any) => setMessage(e.target.value)
  
    const nameIsError = name.length < 3 || name.length > 150 
    const subjectIsError = subject.length < 0 || subject.length > 150
    const emailIsError = email.length < 3 || email.length > 100
    const messageIsError = message.length < 10 || message.length > 1000 
  
    async function handleSubmit(event: any) {
        event.preventDefault();
        setIsSending(true);
        const data = {
            name: String(name),
            email: String(email) ,
            subject: String(subject),
            message: String(message),
        };

        const response = await fetch('/api/email', {
            method: "POST",
            body: JSON.stringify(data),
        });

        if(response.ok) {
            console.log("Message sent successfully");
            setIsSending(false);
            toast.success("Message was sent successfully")
            setName('')
            setSubject('')
            setEmail('')
            setMessage('')
        }
        if(!response.ok) {
            console.log("Error sending message")
            setIsSending(false);
            toast.error("Error sending message")
        }
    };

    return (
        <section className='flex flex-col items-center pt-10'>
            <h1 className='text-5xl font-extrabold tracking-widest p-8'>Contact Me</h1>
            <div className="w-[380px] ">
                <ChakraProvider>
                
                <form onSubmit={handleSubmit} className="w-full px-4">   
                    {/* NAME */}
                    <FormControl isRequired isInvalid={nameIsError} className='pb-4'>
                        <FormLabel className="text-white">Name</FormLabel>
                        <Input 
                            value={name}
                            onChange={handleNameChange}
                            isInvalid={!nameIsError ? false: true}
                            color='white'
                        />
                        {!nameIsError ? (
                            <FormHelperText>
                            Please enter your First and Last Name
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Name Required</FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl isRequired isInvalid={emailIsError} className='pb-4'>
                        {/* EMAIL */}
                        <FormLabel className="text-white">Email</FormLabel>
                        <Input 
                            value={email} 
                            type='email'
                            onChange={handleEmailChange}
                            isInvalid={!emailIsError ? false: true}
                            isRequired={true}
                            color='white'
                        />
                        {!emailIsError ? (
                            <FormHelperText>
                            Enter your email
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}

                    </FormControl>

                    {/* SUBJECT */}
                    <FormControl isInvalid={subjectIsError} className='pb-4'>
                        <FormLabel className="text-white">Subject</FormLabel>
                        <Input 
                            type='text'
                            value={subject} 
                            onChange={handleSubjectChange} 
                            color='white'
                        />
                        {!subjectIsError ? (
                            <></>
                        ) : (
                            <FormErrorMessage>Subject cannot be more than 100 Characters</FormErrorMessage>
                        )}
                    </FormControl>

                    {/* MESSAGE */}
                    <FormControl isRequired isInvalid={messageIsError} className='pb-4'>
                        <FormLabel className="text-white">Message</FormLabel>
                        <Textarea
                            value={message}
                            onChange={handleMessageChange}
                            rows={5}
                            isInvalid={!messageIsError ? false: true}
                            color='white'
                            size='md'
                            isRequired={true}
                        />
                        {!messageIsError ? (
                            <FormHelperText>
                            Please enter a message
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Message must be greater than 10 characters </FormErrorMessage>
                        )}
                    </FormControl>                        

                    <Button 
                        leftIcon={<AiFillMail />} 
                        colorScheme='teal'
                        variant="fill"
                        type="submit"
                        isLoading={isSending ? true : false}
                        loadingText='Submitting'
                        className='flex flex-row relative justify-center items-center py-3 px-6 w-full bg-fetch-green text-white rounded-full mt-6 gradient-bg'>
                        Send Message
                    </Button>
                </form>
                </ChakraProvider>
                <Toaster />
            </div>
        </section>
    )
}
export default ContactForm