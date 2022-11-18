import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useAuth(code) {
  const[accessToken, setAccessToken] = useState()
  const[refreshToken, setRefreshToken] = useState()
  const[expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    axios.post('https://new-project-2.vercel.app:3001/login', {
        code,

    }).then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreashToken)
        setExpiresIn(res.data.expiresIn)

        window.history.pushState({}, null,'/')
    })
    .catch(() => {
        window.location = '/'
    })
    
    
      }, [code])

      useEffect(() => {

      }, [refreshToken, expiresIn])

    return accessToken

}