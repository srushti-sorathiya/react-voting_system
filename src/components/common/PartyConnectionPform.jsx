import React, { useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import voteimg from '../admin/Images/vote01.png'
import { GET_PARTY_PROGRESS } from '../../redux-saga/admin/Party/PartyAction'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const PartyConnectionPform = () => {

    const [selected, setSelected] = useState("")

    const dispatch = useDispatch();

    const party = useSelector((state) => state.partyReducer);


    useEffect(() => {
        dispatch({ type: GET_PARTY_PROGRESS })
    }, [])
    console.log(party, 'Party');

    return (
        <>
            <Listbox
                value={selected} onChange={setSelected}
            >
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Select E-Election Party</Listbox.Label>
                        <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                    <img src={voteimg} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                    <span className="ml-3 block truncate">selected election party</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {party.data?.map((val, ind) => (
                                        <Listbox.Option
                                            key={val._id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                        // value={person}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <img src={val.Profile} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                                        <span
                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                        >
                                                            {val.pName}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </>
    )
}

export default PartyConnectionPform