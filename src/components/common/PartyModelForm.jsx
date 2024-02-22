import React, { useRef } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { POST_PARTY_PROGRESS } from '../../redux-saga/admin/Party/PartyAction';
import Swal from 'sweetalert2';

const PartyModelForm = () => {

    const name = useRef();
    const logo = useRef();
    const code = useRef();

    const party = useSelector((state) => state.partyReducer)
    const dispatch = useDispatch()

    console.log(party);

    const handleSubmit = (e) => {
        // e.prentDefault()
        const formData = new FormData();
        formData.append("pName", name.current.value);
        formData.append("shortCode", code.current.value);
        formData.append("Profile", logo.current.files[0]);

        dispatch({
            type: POST_PARTY_PROGRESS, payload: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })

        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Party has been added",
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <>
            <div className='py-6 border-b-2 border-solid border-gray-300'>
                <button className="btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Party <span className='px-1'>&rarr;</span>
                </button>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-gray-800" id="exampleModalLabel">Modal title</h1>
                            {/* <button type="button" class=" btn-close-black text-black" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            <button type="button" class="btn-clos btn-close-black text-black " data-bs-dismiss="modal" aria-label="Close"> <IoCloseSharp /></button>
                        </div>
                        <div class="modal-body text-gray-800">
                            <div className="space-y-12">
                                <div className="border-b border-gray-900/10 pb-1">
                                    <h2 className="text-base font-semibold leading-7 text-gray-900">Party Information</h2>
                                </div>

                                <div className="border-b border-gray-900/10 pb-12">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Party Name
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
                                                Party Short Code
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="code"
                                                    id="code"
                                                    autoComplete="code"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    ref={code}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                Photo
                                            </label>
                                            <div className="mt-2 flex items-center gap-x-3">
                                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"

                                                >
                                                    Change
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                Cover photo
                                            </label>
                                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                <div className="text-center">
                                                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>Upload a file</span>
                                                            {/* <input id="file-upload" name="file-upload" type="file" className="sr-only"/> */}
                                                            <input
                                                                className="mb-3"
                                                                type="file"
                                                                id="logo"
                                                                name="logo"
                                                                style={{ width: "100%" }}
                                                                ref={logo}
                                                            />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                                </div>
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
                                    Add
                                </button>
                            </div>

                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base" data-bs-dismiss="modal">Close</button>
                            <button type="button" class=" btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartyModelForm