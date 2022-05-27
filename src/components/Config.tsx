import { Box, TextField, Typography } from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ja from "date-fns/locale/ja";

registerLocale("ja", ja);

interface Props {
  date: Date;
  onDateChange: (date: Date) => void;
}

export const Config = ({ date, onDateChange }: Props) => {
  return (
    <>
      <Typography variant="h5">設定</Typography>
      <Box p={1} pt={2}>
        <DatePicker
          selected={date}
          onChange={(date: Date) => onDateChange(date)}
          locale="ja"
          dateFormat="yyyy年/MM月/dd日"
          customInput={<TextField label="貯金をはじめた日" />}
        />
      </Box>
    </>
  );
};
