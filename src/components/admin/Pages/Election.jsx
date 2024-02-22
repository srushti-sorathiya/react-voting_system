import React, { useEffect, useRef, useState } from 'react'
import Banner from '../../common/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_ELECTION_PROGRESS, GET_ELECTION_PROGRESS, POST_ELECTION_PROGRESS } from '../../../redux-saga/admin/Election/ElectionAction';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
// import Button from '../../common/Button';
import ElectionModelForm from '../../common/ElectionModelForm';
import Swal from 'sweetalert2';
// import { IoCloseSharp } from "react-icons/io5";

const Election = () => {

  const [view, setview] = useState({})

  const election = useSelector((state) => state.electionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ELECTION_PROGRESS })
  }, []);

  console.log(election, 'election data');

  const handleDelete = (val, id) => {
    // console.log(val , 'val');
    // console.log(id , 'id');

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

    dispatch({ type: DELETE_ELECTION_PROGRESS, payload: val })
  }

  return (
    <>
      <div>
        <div>
          <div className="px-4 py-1 sm:px-0">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900">ELECTION INFORMATION</h3>
            <p className="mt-4 max-w-2xl text-md leading-6 text-gray-500">Election Name and Registration Date.</p>
            <ElectionModelForm />
          </div>
          <div className="px-4 pt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-bold leading-6 text-gray-900">ELECTION NAME</dt>
            <dd className="mt-1 text-sm font-bold leading-6 text-gray-900 sm:col-span-2 sm:mt-0">REGISTER DATE</dd>
          </div>
          {
            election.data?.map((val, id, ind) => {
              return (
                <>
                  <div >
                    <div className="mt- border-t border-gray-200" key={val._id}>
                      <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt className="text-sm font-medium leading-6 text-gray-900">{val.ElectionName}</dt>
                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{val.RegisterDate}
                            <button className='pl-8'><FaEdit />
                            </button>
                            <button className='pl-8' onClick={() => handleDelete(val, id)}><RiDeleteBin6Fill /></button>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Election