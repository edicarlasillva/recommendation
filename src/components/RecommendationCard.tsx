import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { deleteRecommendation } from "../store/slices/recommendationsSlice";

interface RecommendationCardProps {
  id: number;
  name: string;
  content: string;
}

export function RecommendationCard({id, name, content}: RecommendationCardProps) {
  const dispatch = useAppDispatch()

  function handleDeleteRecommendation() {
    dispatch(deleteRecommendation(id))
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">{content}</Typography>
      </CardContent>

      <CardActions>
        <Button onClick={handleDeleteRecommendation}>Excluir</Button>
      </CardActions>
    </Card>
  )
}