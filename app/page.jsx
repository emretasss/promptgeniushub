import React from 'react'
import Feed from '@components/Feed'
const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center' >Discover & Share 
        <br className="max-md:hidden "/>
        <span className='orange_gradient text-center'>AI-powered Prompts</span></h1>
        <p className='desc text-center'>PromptGeniusHub is an AI-powered platform designed to foster creativity and intelligence. This hub provides users with prompts that ignite thoughts and inspire creativity. Explore PromptGeniusHub to express yourself, develop new ideas, and push the boundaries of your mind</p>
    <Feed />
    </section>
  )
} 


export default Home
 