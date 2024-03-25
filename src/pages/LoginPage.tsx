import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/slices/userSlice";

export function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Simula uma chamada a API que retorna ID, name, token
    const response = {
      id: Date.now(),
      name: "Carla Silva",
      token: "123456",
    };

    dispatch(login(response));

    navigate("/recomendacao");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Fazer Login
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="E-mail" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Senha" type="password" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
