import { MdDashboardCustomize } from "react-icons/md";
import { MdHowToVote } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <MdDashboardCustomize />
    },
    {
        key: 'election',
        label: 'Election',
        path: '/election',
        icon: <MdHowToVote />
    },
    {
        key: 'party',
        label: 'Party',
        path: '/party',
        icon: <FaPeopleGroup />
    },
    {
        key: 'partyConnection',
        label: 'Party Connection',
        path: '/partyConnection',
        icon: <FaPeopleArrows />
    },
    {
        key: 'user',
        label: 'User',
        path: '/user',
        icon: <BsFillPeopleFill />
    }
]


// export const DASHBOARD_SIDBAR_BOTTOM_LINKS = [
//     {
//         key: 'lo'
//     }
// ]