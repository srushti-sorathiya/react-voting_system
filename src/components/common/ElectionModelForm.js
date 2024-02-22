import React, { useRef, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { POST_ELECTION_PROGRESS } from '../../redux-saga/admin/Election/ElectionAction';
import Swal from 'sweetalert2';

const ElectionModelForm = () => {

    const name = useRef();
    const registrationDate = useRef();

    const election = useSelector((state) => state.electionReducer);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const data = {
            ElectionName: name.current.value,
            RegisterDate: registrationDate.current.value,
        };
        dispatch({ type: POST_ELECTION_PROGRESS, payload: data, })

        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Election has been added",
            showConfirmButton: false,
            timer: 1500
        });
    }
    return (
        <>
            <div className='py-6 border-b-2 border-solid border-gray-300  '>
                <button className="btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Election <span className='px-1'>&rarr;</span>
                </button>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-gray-800" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-clos btn-close-black text-black " data-bs-dismiss="modal" aria-label="Close"> <IoCloseSharp /></button>
                        </div>
                        <div class="modal-body text-gray-800">
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-1">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Election Information</h2>
                                </div>

                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Election Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="pname"
                                                    id="name"
                                                    placeholder='Enter Party Name'
                                                    autoComplete="given-name"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    ref={name}
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Registration Date
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="date"
                                                    name="registrationDate"
                                                    id="registrationDate"
                                                    autoComplete="registrationDate"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    ref={registrationDate}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900 " data-bs-dismiss="modal">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleSubmit}
                                >
                                    Addd
                                </button>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base" data-bs-dismiss="modal">Close</button>
                            <button type="button" class=" btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ElectionModelForm