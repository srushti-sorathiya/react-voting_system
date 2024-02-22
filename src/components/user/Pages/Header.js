import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

const Header = () => {

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to Logged Out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log-Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                Cookies.remove("Role");
                Cookies.remove("Name");
                Cookies.remove("_id");
                Cookies.remove("Profile");
                window.location = "/"
            }
        });
    }

    return (
        <div className='bg-white h-12 px-4 flex justify-between items-center border-b border-gray-200'>
            <div className='relative'>
                <IoSearch fontSize={20} className='text-gray-400 absolute gap-1/2 translate-y-1/2 pl-1' />
                <input type='text' placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm px-4' />
            </div>
            <div>
                <div>
                    <span className=' text-red-600 cursor-pointer text-xl  flex items-center gap-2 px-1 py-2   flex item-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base' onClick={handleLogOut} ><RiLogoutBoxFill />Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Header