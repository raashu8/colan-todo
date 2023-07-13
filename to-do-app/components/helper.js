import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SocialDistanceOutlinedIcon from "@mui/icons-material/SocialDistanceOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { Button, Tooltip } from "@mui/material";

export const sidebarData = [
    {
        name: "Dashboard",
        path: "/home/main/",
        icon: (
            <Tooltip title="Dashboard" placement="right-start">
                <GridViewIcon />{" "}
            </Tooltip>
        ),
    },
    {
        name: "To Do's",
        path: "/home/todo/",
        icon: (
            <Tooltip title="To Do's" placement="right-start">
                <PlaylistAddCheckIcon />{" "}
            </Tooltip>
        ),
    },
    {
        name: "Reminder",
        path: "/home/reminder/",
        icon: <Tooltip title="Reminder" placement="right-start">
            <NotificationsActiveOutlinedIcon />
        </Tooltip>

        ,
    },
    {
        name: "Projects",
        path: "/home/projects/",
        icon: <Tooltip title="Projects" placement="right-start">
            <BusinessCenterOutlinedIcon />
        </Tooltip>
        ,
    },
    {
        name: "WhatsApp",
        path: "/home/whatsapp/",
        icon: <Tooltip title="WhatsApp" placement="right-start">
            <SocialDistanceOutlinedIcon />
        </Tooltip>
        ,
    },
];
