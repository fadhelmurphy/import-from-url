import '@/styles/globals.css'
import React from 'react'

global.React = React

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
