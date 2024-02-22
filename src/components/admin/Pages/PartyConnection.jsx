import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PARTY_CONNECTION_PROGRESS } from '../../../redux-saga/admin/Party-Connection/PartyConnectionAction';
// import voteimg from '../Images/vote01.png'
import { GET_ELECTION_PROGRESS } from '../../../redux-saga/admin/Election/ElectionAction';
import { GET_PARTY_PROGRESS } from '../../../redux-saga/admin/Party/PartyAction';
import Swal from 'sweetalert2';
import { POST_PARTY_CONNECTION_PROGRESS } from '../../../redux-saga/admin/Party-Connection/PartyConnectionAction';
import { DELETE_PARTY_CONNECTION_PROGRESS } from '../../../redux-saga/admin/Party-Connection/PartyConnectionAction';

const PartyConnection = () => {

  const [Data, setData] = useState({
    election: "", 
    party: ""
  })

  const dispatch = useDispatch();

  const Election = useSelector((state) => state.electionReducer);
  useEffect(() => {
    dispatch({ type: GET_ELECTION_PROGRESS })
  }, [])
  console.log(Election, 'elec');

  const Party = useSelector((state) => state.partyReducer);
  useEffect(() => {
    dispatch({ type: GET_PARTY_PROGRESS })
  }, [])
  console.log(Party, 'Party');

  const partyConnect = useSelector((state) => state.partyConnectionReducer);
  useEffect(() => {
    dispatch({ type: GET_PARTY_CONNECTION_PROGRESS });
  }, []);

  console.log(partyConnect, 'PartConnect');


  const inputHandel = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const handleConectParty = () => {
    if (Data.election && Data.party) {
      const payload = {
        Election: Data.election,
        Party: Data.party,
      };

      dispatch({ type: POST_PARTY_CONNECTION_PROGRESS, payload });

      Swal.fire({
        title: "Connected!",
        text: "Party connected successfully",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please select both election and party",
        icon: "error",
      });
    }
  };

  const handalDelete = (val) => {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success",
    });
    dispatch({
      type: DELETE_PARTY_CONNECTION_PROGRESS,
      payload: val,
    });
  };

  return (
    <>
      <section className="charts mt-4">
        <div className="lshadow">
          <div className="partyadd">
            <label className="form-label">Select E-Election</label>
            <select
              onChange={(e) => inputHandel(e)}
              name="election"
              className="form-select form-select-lg mb-2"
              aria-label="Default select example"
            >
              <option value={""} selected>
                select election 
              </option>
              {Election.data?.map((val, ind) => (
                <option key={ind} value={val._id}>
                  {val.ElectionName}
                </option>
              ))}
            </select>

            <label className="form-label">Select E-Election Party</label>
            <select
              onChange={(e) => inputHandel(e)}
              name="party"
              className="form-select form-select-lg mb-2"
              aria-label="Default select example"
            >
              <option value={""} selected>
                select party
              </option>
              {Party.data?.map((val, index) => (
                <option key={index} value={val._id}>
                  {val.pName}
                </option>
              ))}
            </select>
          </div>
          <div className='py-4'>
            <button className="btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base" type="button" onClick={handleConectParty}>
              Connect <span className='px-1'>&rarr;</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="container">
            <table
              className="table table-hover"
              style={{ boxShadow: "0px 3px 20px -15px" }}
            >
              <thead>
                <tr>
                  <th scope="col">ElectionName</th>
                  <th scope="col">RegisterDate</th>
                  <th scope="col">Party Name</th>
                  <th scope="col">Logo</th>
                  <th scope="col">Short Code</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {partyConnect.data?.map((val, ind) => (
                  <tr key={ind}>
                    <td>{val.Election && val.Election.ElectionName}</td>
                    <td>
                      {new Date(
                        val.Election && val.Election.RegisterDate
                      ).toLocaleDateString("en-US")}
                    </td>
                    <td>{val.Party && val.Party.pName}</td>
                    <td>
                      {/* <img
                        src={val.Party && val.Party.Profile}
                        alt="party logo"
                        style={{ width: "50px", height: "50px" }}
                      /> */}
                    </td>
                    <td>{val.Party && val.Party.shortCode}</td>
                    <td>
                      <button
                        className="btn btn-dark"
                        style={{ margin: "0px", marginRight: "15px" }}
                        onClick={() => handalDelete(val)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export default PartyConnection