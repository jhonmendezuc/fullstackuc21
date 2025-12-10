import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Alert from "@mui/material/Alert"
import type { CSSProperties } from "react"
import { useState } from "react"

const BoxStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  marginTop: "8px",
}

function Login() {
  const [loading, setLoading] = useState(false)
  return (
    <Container maxWidth="xs">
      <Box sx={BoxStyles}>
        <Typography variant="h4">Iniciar Sesión</Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            {loading ? " Cargando..." : "Iniciar Sesión"}
          </Button>
        </Box>

      </Box>
    </Container>
  )
}

export default Login