import React, { Children } from 'react'
import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
export const metadata ={
    title: "PromptGeniusHub",
    description:"PromptGeniusHub is an AI-powered platform designed to foster creativity and intelligence. This hub provides users with prompts that ignite thoughts and inspire creativity. Explore PromptGeniusHub to express yourself, develop new ideas, and push the boundaries of your mind.",
    url:'https://promptgeniushub.vercel.app',
}


const RootLayout = ({children}) => { 

  return (
    <html lang="en">
   
    <body>
        <div className='main'>
        <div className='gradient' />

        </div>
        <main className='app' >
          <Nav/>
            {children}
        </main>

    </body>

    </html>
    
  )
}

export default RootLayout;
