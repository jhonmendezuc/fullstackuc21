import { useState, useEffect } from "react"
/*interfaces graficas*/
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Alert from "@mui/material/Alert"
import Notification from "../commons/Notification"
import type { CSSProperties } from "react"

/*navegacion*/
import { useNavigate } from "react-router-dom"
/* estados redux toolkit*/
import { useDispatch, useSelector } from "react-redux"
import type { RootState, AppDispatch } from "../../store/store"
import { loginUser } from "../../store/auth.slice"
import type { AlertColor } from "@mui/material"


const BoxStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error, isAuthenticated } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("error");


  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }

  }, [isAuthenticated, navigate])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginUser({ email, password }))
    setOpen(true);
    setMessage(error || "Error al iniciar sesión");
    setSeverity("error");
  }

  const handleClose = () => {
    setOpen(false);
    setMessage("");
    setSeverity("error");
  };

  return (
    <Container maxWidth="xs">
      <Box sx={BoxStyles}>
        <Typography variant="h4" sx={{ color: "primary.main" }}>Iniciar Sesión</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} >
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Notification open={open} message={message} severity={severity} onClose={handleClose} />
          <Button variant="contained" color="primary" type="submit">
            {loading ? " Cargando..." : "Iniciar Sesión"}
          </Button>
        </Box>

      </Box>
    </Container >
  )
}

export default Login