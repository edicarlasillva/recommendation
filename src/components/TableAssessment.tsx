/* eslint-disable @typescript-eslint/no-explicit-any */
import { Delete, Edit } from "@mui/icons-material";

import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteAssessmentThunk } from "../store/slices/assessmentsSlice";
import { changePage, changeRowsPerPage } from "../store/slices/paginationSlice";

export function TableAssessment() {
  const dispatch = useAppDispatch();

  const assessments = useAppSelector((state) => state.assessments);
  const pagination = useAppSelector((state) => state.pagination);

  const initialPositionPage =
    pagination.rowsPerPage * (pagination.currentPage - 1);

  function handleRowsChangePage(event: any) {
    dispatch(changeRowsPerPage(event?.target.value));
  }

  function handleChangePage(_: any, page: number) {
    dispatch(changePage(page + 1));
  }

  function handleDelete(id: string) {
    dispatch(deleteAssessmentThunk(id));
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Disciplina</TableCell>
            <TableCell>Nota</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {assessments
            .slice(
              initialPositionPage,
              initialPositionPage + pagination.rowsPerPage
            )
            .map((assessment) => (
              <TableRow key={assessment.id}>
                <TableCell>{assessment.id}</TableCell>
                <TableCell>{assessment.discipline}</TableCell>
                <TableCell>{assessment.grade}</TableCell>
                <TableCell>
                  <IconButton>
                    <Edit color="primary" />
                  </IconButton>

                  <IconButton onClick={() => handleDelete(assessment.id)}>
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <TablePagination
                component="div"
                count={assessments.length}
                page={pagination.currentPage - 1}
                onPageChange={handleChangePage}
                rowsPerPage={pagination.rowsPerPage}
                rowsPerPageOptions={[2, 3, 5, 10]}
                onRowsPerPageChange={handleRowsChangePage}
                labelRowsPerPage="Avaliações por página"
                labelDisplayedRows={({ from, to, count }) =>
                  `${from} - ${to} de ${count}`
                }
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
