import React from 'react'
import { SessionProvider } from 'next-auth' 
const Provider = ( {children,session} ) => {
  return (
   <SessionProvider>
    {children}
   </SessionProvider>
  )
}

export default Provider

