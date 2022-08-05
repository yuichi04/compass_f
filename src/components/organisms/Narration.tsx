import { FC, memo } from "react";
import { ScreenForBlackoutEvent } from "../molecules";

const Narration: FC = memo(() => {
  return <ScreenForBlackoutEvent open={false}>a</ScreenForBlackoutEvent>;
});

export default Narration;
