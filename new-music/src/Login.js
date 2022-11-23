import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=a32f4a292b934265b25286c4ce51835c&response_type=code&redirect_uri=https://new-project-2.vercel.app&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state' 

export default function Login() {
  return( 
  <Container 
  className='d-flex justify-content-center align-items-center'
  style={{ minHeight: '100vh' }}>
    <a className='btn btn-success btn-lg' href={AUTH_URL}>Login With Spotify</a>
  </Container>
   
  )
}