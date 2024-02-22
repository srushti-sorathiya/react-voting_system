import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTY_PROGRESS } from '../../../redux-saga/admin/Party/PartyAction';
import Banner from '../../common/Banner';
import PartyModelForm from '../../common/PartyModelForm';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { DELETE_PARTY_PROGRESS } from '../../../redux-saga/admin/Party/PartyAction';
import Swal from 'sweetalert2';

const Party = () => {

  const party = useSelector((state) => state.partyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PARTY_PROGRESS })
  }, [])

  console.log(party, 'party daata');

  const handleDelete = (val, _id) => {
      // console.log(val, 'val');
      // console.log(_id , 'id');

      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete this election!",
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
      dispatch({ type: DELETE_PARTY_PROGRESS, payload: val})
  }
  return (
    <>

      <div className="bg-white py-15 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Election Party Details</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Party Name , Profile and Party Short Code
            </p>
            <PartyModelForm />
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {party.data?.map((val) => (
              <li key={val._id}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={val.Profile} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{val.pName}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{val.shortCode}</p>
                  </div>
                  <div>
                    <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <button className='pl-2'><FaEdit /></button>
                      <button className='pl-2' onClick={() => handleDelete(val , val._id)}><RiDeleteBin6Fill /></button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Party