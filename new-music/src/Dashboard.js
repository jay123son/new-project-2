import React from 'react'
import useAuth from './useAuth'
import { Container, From } from 'react-bootstrap'

export default function Dashboard({code}) {
    const accessToken = useAuth(code)
  return <Container>
    <From.Control Type="search" placeholder="Search Songs/Artists" value={search} onChange={e => setSearch(e.target.value)} />
    </Container>
  
}
