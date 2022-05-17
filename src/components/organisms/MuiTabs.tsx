// import * as React from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Grid from "@mui/material/Grid";
// import { Divider, Paper, Typography } from "@mui/material";
// import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import NoteAltIcon from "@mui/icons-material/NoteAlt";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import { Box } from "@mui/system";
// import { MuiContainer } from "../layouts";
// import { CourseCard } from "../organisms";
// import { IconWithSectionTitle, IconWithPageTitle } from "../molecules";
// import { MuiAvatar } from "../atoms";
// import BorderColorIcon from "@mui/icons-material/BorderColor";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// const MuiTabs: React.FC = React.memo(() => {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab
//             label={<IconWithSectionTitle title="前回の続き" icon={BookmarkIcon} iconColor="primary" />}
//             {...a11yProps(1)}
//           />
//           <Tab
//             label={<IconWithSectionTitle title="学習中のコース" icon={BorderColorIcon} iconColor="primary" />}
//             {...a11yProps(2)}
//           />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         <Grid container spacing={2} sx={{ height: "100%" }}>
//           <Grid item md={4}>
//             <CourseCard link="/" />
//           </Grid>
//         </Grid>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <Grid container spacing={2} sx={{ height: "100%" }}>
//           <Grid item md={4}>
//             <CourseCard link="/" />
//           </Grid>
//           <Grid item md={4}>
//             <CourseCard link="/" />
//           </Grid>
//         </Grid>
//       </TabPanel>
//     </Box>
//   );
// });

// export default MuiTabs;

import React from "react";

const MuiTabs = () => {
  return <div>MuiTabs</div>;
};

export default MuiTabs;
