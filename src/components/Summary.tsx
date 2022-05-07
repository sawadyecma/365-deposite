import { Typography } from "@mui/material";
import { Day, sumPressedDays } from "../domain/day";

interface Props {
  days: Day[];
}

export const Summary = ({ days, ...props }: Props) => {
  return (
    <>
      <Typography>サマリー</Typography>
      <div>貯金額{sumPressedDays(days)}円</div>
      <div>貯金した日数{days.filter((day) => day.pressed).length}日</div>
      <div>貯金開始からの経過日</div>
      <div>貯金していない日数</div>
    </>
  );
};
