import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Day, sumPressedDays } from "../domain/day";

interface Props {
  days: Day[];
}

function createRow(name: string, value: number | string) {
  return { name, value };
}

export const Summary = ({ days, ...props }: Props) => {
  const rows = [
    createRow("貯金額", `${sumPressedDays(days)} 円`),
    createRow("貯金した日数", `${days.filter((day) => day.pressed).length} 日`),
    createRow("貯金開始からの経過日", ""),
    createRow("貯金していない日数", ""),
  ];

  return (
    <>
      <Typography variant="h5">サマリー</Typography>
      <Table size="small" sx={{ marginTop: 1 }}>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
