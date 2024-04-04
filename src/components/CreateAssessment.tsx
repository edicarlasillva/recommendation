import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createAssessmentThunk } from "../store/slices/assessmentsSlice";
import { closeModal } from "../store/slices/modalSlice";

export function CreateAssessment() {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.modal);

  const [discipline, setDiscipline] = useState("");
  const [grade, setGrade] = useState("");

  function handleCloseModal() {
    dispatch(closeModal());
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(createAssessmentThunk({ grade: parseFloat(grade), discipline }));

    setDiscipline("");
    setGrade("");

    dispatch(closeModal());
  }

  return (
    <Dialog open={isOpen} onClose={handleCloseModal}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Criar uma nova avaliação</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            name="discipline"
            label="Disciplina"
            sx={{ my: 1 }}
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
          />

          <TextField
            fullWidth
            name="grade"
            label="Nota"
            sx={{ my: 1 }}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
