import Attendance from "../Pages/Attendance";
import NoticeBoard from "../Pages/NoticeBoard";
import Notices from "../Pages/Notices";
import Schedule from "../Pages/Schedule";

const routes = [
  { path: "/Attendance", component: <Attendance /> },
  { path: "/NoticeBoard", component: <NoticeBoard /> },
  { path: "/Notices", component: <Notices /> },
  { path: "/ Schedule", component: <Schedule /> }
];

export default routes;
