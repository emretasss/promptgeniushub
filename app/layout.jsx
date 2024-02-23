import React, { Children } from 'react'
import '@styles/globals.css'

export const metadata ={
    title: "PromptGeniusHub",
    description:"PromptGeniusHub is an AI-powered platform designed to foster creativity and intelligence. This hub provides users with prompts that ignite thoughts and inspire creativity. Explore PromptGeniusHub to express yourself, develop new ideas, and push the boundaries of your mind.",
    url:'https://promptgeniushub.vercel.app',
}


const RootLayout = ({Children}) => { 

  return (
    <html lang="en">
   
    <body>
        <div className='main'>
        <div className='gradient' />

        </div>
        <main className='app' >

        {Children}
        </main>

    </body>

    </html>
    
  )
}

export default RootLayout;
