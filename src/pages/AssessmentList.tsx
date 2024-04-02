import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CreateAssessment } from "../components/CreateAssessment";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  deleteAssessment,
  listAssessments,
} from "../store/slices/assessmentsSlice";
import { openModal } from "../store/slices/modalSlice";

export function AssessmentsList() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user);
  const assessments = useAppSelector((state) => state.assessments);

  function handleAddAssessment() {
    dispatch(openModal());
  }

  function handleDeleteAssessment(id: string) {
    dispatch(deleteAssessment(id));
  }

  useEffect(() => {
    if (!user) {
      alert("Faça login novamente!");

      navigate("/");
      return;
    }
  }, [user, navigate]);

  useEffect(() => {
    dispatch(listAssessments());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Avaliações
      </Typography>

      <Button variant="contained" onClick={handleAddAssessment}>
        Criar avaliação
      </Button>

      <Grid container spacing={2}>
        {assessments.map((assessment) => (
          <Grid item xs={6} md={3} key={assessment.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{assessment.discipline}</Typography>

                <Typography variant="body1">{assessment.grade}</Typography>
              </CardContent>

              <CardActions>
                <Button variant="contained">Editar</Button>
                <Button onClick={() => handleDeleteAssessment(assessment.id)}>
                  Excluir
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CreateAssessment />
    </Container>
  );
}
