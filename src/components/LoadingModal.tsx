import { CircularProgress, Dialog, DialogContent } from "@mui/material";
import { useAppSelector } from "../store/hooks";

export function LoadingModal() {
  const isLoading = useAppSelector((state) => state.loading);

  return (
    <Dialog open={isLoading}>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CircularProgress sx={{ mb: 3 }} />
        <h5>Aguarde! Carregando...</h5>
      </DialogContent>
    </Dialog>
  );
}
