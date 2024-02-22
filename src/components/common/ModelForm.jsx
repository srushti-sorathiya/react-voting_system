import React, { useRef } from 'react'
import { POST_ELECTION_PROGRESS } from '../../redux-saga/admin/Election/ElectionAction';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

const ModelForm = () => {

    const electionName = useRef();
    const registrationDate = useRef();
    const dispatch = useDispatch();

    const addData = () => {
        const data = {
            electionName: electionName.current.value,
            registrationDate: registrationDate.current.value,
        }
        dispatch({ type: POST_ELECTION_PROGRESS, payload: data })
        console.log(data, 'form data');

        Swal.fire({
            title: "Do you want to add the election?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "ADD",
            denyButtonText: `Don't Add`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    return (
        <>
            <form>
                <div className="">
                    <div className="border-b border-gray-900/10 pb-12">
                      <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                          This information will be displayed publicly so be careful what you share.
                      </p>
                  </div>

                    <div className="border-b border-gray-900/10 ">
                        <h2 className="text-base font-semibold leading-7 text-white">Election Information</h2>
                        {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                                    Election Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ref={electionName}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                                    Registration Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" ref={registrationDate}
                                    />
                                </div>
                            </div>

                            {/* <div className="sm:col-span-4">
                              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                 CreateAt
                              </label>
                              <div className="mt-2">
                                  <input
                                      id="email"
                                      name="email"
                                      type="date"
                                      autoComplete="email"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div> */}

                            {/* <div className="sm:col-span-3">
                              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                  Country
                              </label>
                              <div className="mt-2">
                                  <select
                                      id="country"
                                      name="country"
                                      autoComplete="country-name"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                  >
                                      <option>United States</option>
                                      <option>Canada</option>
                                      <option>Mexico</option>
                                  </select>
                              </div>
                          </div> */}

                            {/* <div className="sm:col-span-4">
                              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                  UpdatedAT
                              </label>
                              <div className="mt-2">
                                  <input
                                      type="date"
                                      name="street-address"
                                      id="street-address"
                                      autoComplete="street-address"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div> */}

                            {/* <div className="sm:col-span-2 sm:col-start-1">
                              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                  City
                              </label>
                              <div className="mt-2">
                                  <input
                                      type="text"
                                      name="city"
                                      id="city"
                                      autoComplete="address-level2"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div> */}

                            {/* <div className="sm:col-span-2">
                              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                  State / Province
                              </label>
                              <div className="mt-2">
                                  <input
                                      type="text"
                                      name="region"
                                      id="region"
                                      autoComplete="address-level1"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div> */}

                            {/* <div className="sm:col-span-2">
                              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                  ZIP / Postal code
                              </label>
                              <div className="mt-2">
                                  <input
                                      type="text"
                                      name="postal-code"
                                      id="postal-code"
                                      autoComplete="postal-code"
                                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                              </div>
                          </div> */}
                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                      Cancel
                  </button> */}
                    {/* <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={addData}
                    >
                        ADD
                    </button> */}
                    <button className="btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={addData}>
                        ADD <span className='px-1'>&rarr;</span>
                    </button>
                </div>
            </form>
        </>
    )
}

export default ModelForm