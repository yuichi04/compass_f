import { FC, memo } from "react";
import { MuiContainer } from "../layouts";
import { IconWithSectionTitle, IconWithPageTitle } from "../molecules";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import { CourseCardList } from "../molecules";

const Home: FC = memo(() => {
  return (
    <>
      <MuiContainer maxWidth="lg">
        <IconWithPageTitle title="ようこそ、COMPASSへ" icon={HomeIcon} iconColor="primary" />
        <IconWithSectionTitle title="おすすめの学習コース" icon={MenuBookIcon} iconColor="primary" mb="32px" />
        <CourseCardList enableLinks />
      </MuiContainer>
    </>
  );
});

export default Home;
