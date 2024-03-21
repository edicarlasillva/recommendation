import { Button, Grid, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addRecommendation } from "../store/slices/recommendationsSlice";

// interface Recommendation {
//   id: number;
//   name: string;
//   content: string;
// }

export function RecommendationForm() {
  const dispatch = useAppDispatch()

  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  // const [recommendations, setRecommendations] = useState<Recommendation[]>([])

  const handleAddRecommendation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(addRecommendation({id: Date.now(), name, content}))

    setName('')
    setContent('')

    // setRecommendations({
    //   id: Date.now(), name, content
    // })
  }


  return (
    <form onSubmit={handleAddRecommendation}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Conteúdo"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained">Adicionar recomendação</Button>
        </Grid>
      </Grid>
    </form>
  )
}