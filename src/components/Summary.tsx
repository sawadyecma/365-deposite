import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { differenceInCalendarDays } from "date-fns";
import { Day, sumPressedDays } from "../domain/day";

interface Props {
  days: Day[];
  startDate: Date;
}

function createRow(name: string, value: number | string, unit: string) {
  return { name, value, unit };
}

export const Summary = ({ days, startDate, ...props }: Props) => {
  const passedDayCount = differenceInCalendarDays(new Date(), startDate);
  const checkedDayLen = days.filter((day) => day.pressed).length;
  const skippedDayCount = passedDayCount - checkedDayLen;

  const rows = [
    createRow("貯金額", sumPressedDays(days), "円"),
    createRow("貯金した日数", checkedDayLen, "日"),
    createRow("貯金開始からの経過日", passedDayCount || "-", "日"),
    createRow("貯金していない日数", skippedDayCount || "-", "日"),
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
                <TableCell align="right">
                  {row.value} {row.unit}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
