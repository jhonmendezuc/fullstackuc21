
import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', color: 'error.main' }}>
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo siento, la página que estás buscando no existe o ha sido movida.</p>
        <Link to="/">Volver al inicio</Link>
      </Box>
    </Container>
  )
}
