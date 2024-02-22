import { MdDashboardCustomize } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaVoteYea } from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'home',
        label: 'Home',
        path: '/',
        icon: <MdDashboardCustomize />
    },
    {
        key: 'vote',
        label: 'Vote',
        path: '/vote',
        icon: <FaVoteYea />
    },
    {
        key: 'userProfile',
        label: 'User Profile',
        path: '/userProfile',
        icon: <ImProfile />
    },
    
]
