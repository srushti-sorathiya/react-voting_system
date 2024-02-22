import React, { useRef } from 'react'
// import loginImage from '../auth/vote01.png'
import { BASE_URL , LOGIN_URL } from '../../redux-saga/constant';
import Cookies from 'js-cookie';
import axios from 'axios';
import Swal from 'sweetalert2';

const Login = () => {

    const name = useRef();
    const email = useRef();
    const password = useRef();

    const handleLogin = () => { 
        const data = {
            Name: name.current.value,
            Email: email.current.value,
            Password: password.current.value
        }
        console.log(data);
        axios
            .post(BASE_URL + LOGIN_URL, data).then((res) => {
                console.log(res, 'res from login');
                Cookies.set("Role", res.data.data.Role)
                Cookies.set("Name", res.data.data.Name)
                Cookies.set("_id", res.data.data._id)
                Cookies.set("Profile", res.data.data.Profile)
                Cookies.set("Email", res.data.data.Email)
                Cookies.set("Phone",res.data.data.Phone)
                Cookies.set("DOB", res.data.data.DOB)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location = "/";
            }).catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Your Information Is Not Valid !",
                    icon: "info",
                    showCancelButton: false,
                    confirmButtonText: "OK",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location = "/";
                    }
                });
            });
    }

    return (
        <>
            <section>
                <div className="flex min-h-full flex-1 flex-col px-6 lg:px-8  justify-center">
                    <div>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* <img
                                className="mx-auto h-28 w-auto"
                                src={loginImage}
                                alt="login image" /> 
                                <h3 className='text-center font-semibold text-gray-900 '>E-ELECTION</h3> */}
                            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* <form className="space-y-6" action="#" method="POST"> */}
                            {/* <form className='space-y-6" action="#"'> */}
                            <div className='space-y-6'>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            required ref={name}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required ref={email}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 m-0">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required ref={password}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <button
                                        type="submit" onClick={handleLogin}
                                        className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-gray-950 "> Sign In</button>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login