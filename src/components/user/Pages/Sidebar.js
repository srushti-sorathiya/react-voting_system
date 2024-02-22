import React from 'react'
import { MdOutlineHowToVote } from "react-icons/md";
import { DASHBOARD_SIDEBAR_LINKS } from '../Header/Nav';
import { Link, useLocation } from 'react-router-dom';
import { RiLogoutBoxFill } from "react-icons/ri";

const linkClasses = 'flex item-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Sidebar = () => {
    return (
        <>
            <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
                <div className='flex items-center gap-2 px-1 py-3 '>
                    <MdOutlineHowToVote fontSize={24} />
                    <span className='text-neutral-100 text-lg'>E-ELECTION</span>
                </div>
                <div className='flex-1 py-8 flex flex-col gap=0.5'>{DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SlidebarLink key={item.key} item={item} />
                ))}</div>
            </div>
        </>
    )
}

export default Sidebar

function SlidebarLink({ item }) {

    const { pathname } = useLocation()
    return (
        <Link to={item.path} className={(pathname === item.path ? 'bg-neutral-700 text-slate-200' : 'text-slate-400', linkClasses)}>
            <span className='text-xl'>{item.icon}</span>{item.label}
        </Link>
    )
}