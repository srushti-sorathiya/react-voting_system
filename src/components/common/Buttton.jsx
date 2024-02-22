import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import ModelForm from './ModelForm';

const Button = (props) => {
    return (
        <>
            <div className='pt-3'>
                {/* <button className='border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base'>{props.data} <span className='px-1'>&rarr;</span></button> */}

                <button className="btn border-solid border-1 rounded-full bg-gray-600 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-max-content text-base" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    {props.data} <span className='px-1'>&rarr;</span>
                </button>

                <div class="offcanvas offcanvas-start  text-bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                        <button type="button" class="btn-clos btn-close-white text-white " data-bs-dismiss="offcanvas" aria-label="Close"> <IoCloseSharp /></button>
                    </div>
                    <div class="offcanvas-body">
                        <div>
                            {/* Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. */}
                          <ModelForm/>

                        </div>
                        {/* <div class="dropdown mt-3">
                            <button class="btn btn-secondary" type="button" >
                                ADD
                            </button> */}
                            {/* <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Button