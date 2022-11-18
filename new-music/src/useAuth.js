import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useAuth(code) {
  const[accessToken, setAccessToken] = useState()
  const[refreshToken, setRefreshToken] = useState()
  const[expiresIn, setExpiresIn] = useState()

  useEffect(() => {
    if (!refreshToken || !expiresIn) return
    const interval = setInterval(() =>{

  
    axios.post('https://new-project-2.vercel.app:3001/refresh', {
        refreshToken,
     })
    .then(res => {
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreashToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null,'/')
    })
    
        
    .catch(() => {
        window.location = '/'
    })
 }, (expiresIn - 60) *1000)

 return () => clearInterval(interval)

    } [refreshToken, expiresIn])

    return accessToken

}