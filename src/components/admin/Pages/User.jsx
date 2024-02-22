import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_USER_PROGRESS, GET_USER_PROGRESS } from '../../../redux-saga/admin/User/userAction';
// import UserFormModel from '../../common/UserFormModel';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from 'sweetalert2';

const User = () => {

    const user = useSelector((state) => state.userReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: GET_USER_PROGRESS })
    }, [])

    console.log(user, 'user dattaa');

    const handleDelete = (val, _id) => {
        // console.log(val, 'val');
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this user!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

        dispatch({ type: DELETE_USER_PROGRESS, payload: val })
    }

    return (
        <>
            <div className="bg-white py-24 sm:pb-32 sm:pt-14 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className=" max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Learn how to grow your business with our expert advice.
                        </p>
                        {/* <UserFormModel /> */}
                    </div>
                    <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
                        {user.data?.map((val) => (
                            <article key={val._id} className="flex max-w-xl flex-col items-start justify-between border-2 border-gray-200 rounded-md border-solid p-4">
                                <div className="flex items-center gap-x-4 text-xs ">
                                    <time className="text-gray-500">
                                        {val.cardNumber}
                                    </time>
                                    <p
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {val.Role}
                                    </p>
                                </div>
                                <div className="relative mt-6 flex items-center gap-x-4">
                                    <img src={val.Profile} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <p >
                                                <span className="absolute inset-0" />
                                                {val.Name}
                                            </p>
                                        </p>
                                        <p className="text-gray-600">{val.Sex}</p>
                                    </div>
                                </div>
                                <div className="group relative px-2">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <p>
                                            <span className="absolute inset-0" />
                                            {val.Phone}
                                        </p>
                                    </h3>
                                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{val.Address}</p>

                                </div>
                                <div className='pt-4'>
                                    <button className='pl-2'><FaEdit /></button>
                                    <button className='pl-2' onClick={() => handleDelete(val, val._id)}><RiDeleteBin6Fill /></button>
                                </div>

                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
