import { Box, TextField, Typography } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";

interface Props {
  date: Date | null;
  onDateChange: (date: Date | null) => void;
}

export const Config = ({ date, onDateChange }: Props) => {
  return (
    <>
      <Typography variant="h5">設定</Typography>
      <Box p={1} pt={2}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
          <DatePicker
            label="貯金開始日"
            value={date}
            onChange={onDateChange}
            renderInput={(props) => <TextField {...props} size="small" />}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
};
