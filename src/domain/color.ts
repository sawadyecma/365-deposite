export type Color = string;

export function newColor({ random = false }: { random?: boolean }): Color {
  if (random) {
    return `#${(Math.random() * 16).toString(16).substring(2, 8)}`;
  }

  return "#1e2c0f";
}

function splitColor(color: Color): string[] {
  const colors = [
    color.substring(1, 3),
    color.substring(3, 5),
    color.substring(5, 7),
  ];
  return colors;
}

export function graduateColor(
  start: Color,
  end: Color,
  mediumCnt: number
): Color[] {
  const splitStart = splitColor(start);
  const splitEnd = splitColor(end);
  const rStart = parseInt(splitStart[0], 16);
  const gStart = parseInt(splitStart[1], 16);
  const bStart = parseInt(splitStart[2], 16);
  const rEnd = parseInt(splitEnd[0], 16);
  const gEnd = parseInt(splitEnd[1], 16);
  const bEnd = parseInt(splitEnd[2], 16);

  const rDiff = (rEnd - rStart) / mediumCnt;
  const gDiff = (gEnd - gStart) / mediumCnt;
  const bDiff = (bEnd - bStart) / mediumCnt;

  const colors = [...new Array(mediumCnt)].map((_, index) => {
    return (
      "#" +
      Math.floor(rStart + rDiff * index)
        .toString(16)
        .padStart(2, "0") +
      Math.floor(gStart + gDiff * index)
        .toString(16)
        .padStart(2, "0") +
      Math.floor(bStart + bDiff * index)
        .toString(16)
        .padStart(2, "0")
    );
  });
  return colors;
}
