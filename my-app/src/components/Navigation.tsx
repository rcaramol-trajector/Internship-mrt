import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {Station} from '../models/mrt';



const Navigation = () => {
const urlParam = useParams()
const navigate = useNavigate()

  return (
    <nav className="bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWRA2MMzJjLf2oA3CknlxUkwIc4lL1E7r4g&usqp=CAU" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://banner2.cleanpng.com/20190626/qik/kisspng-rail-transport-train-clip-art-locomotive-thomas-pixel-art-maker-5d13006bc48b57.9761727315615263798051.jpg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MetroRail</span>
        </a>
        <button data-collapse-toggle="navbar-default" 
        type="button" 
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
        dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row 
          md:space-x-8">
            <li>
              <a 
              onClick={()=>{
                navigate('/home');
              }}
              href="" 
              className="block py-2 px-3 text-white bg-blue-700 rounded 
                md:bg-transparent 
                md:text-blue-700 
                md:p-0 dark:text-white 
                md:dark:text-blue-500" 
                aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a 
              onClick={()=>{
                navigate('/stations');
              }}
              href="" 
              className="block py-2 px-3 text-white rounded 
              hover:bg-gray-100 
              md:hover:bg-transparent 
              md:border-0 
              md:hover:text-blue-700 
              md:p-0 
              dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Station
              </a>
            </li>
            <li>
              <a 
              onClick={()=>{
                navigate('/services')
              }}
              href="" 
              className="block py-2 px-3 text-white rounded 
                hover:bg-gray-100 
                md:hover:bg-transparent 
                md:border-0 
                md:hover:text-blue-700 
                md:p-0 
                dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Services
              </a>
            </li>
            <li>
              <a onClick={()=>{
                navigate('/admin')
              }}
              href="" 
              className="block py-2 px-3 text-white rounded 
                hover:bg-gray-100 
                md:hover:bg-transparent 
                md:border-0 
                md:hover:text-blue-700 
                md:p-0 dark:text-white 
                md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Admin
              </a>
            </li>
            <li>
              <a 
              onClick={()=>{
                navigate('/contact');
              }}
              href="" 
              className="block py-2 px-3 text-white rounded
                hover:bg-gray-100 
                md:hover:bg-transparent 
                md:border-0 
                md:hover:text-blue-700 
                md:p-0 dark:text-white 
                md:dark:hover:text-blue-500 
                dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navigation;

function useState(arg0: string): [any, any] {
  throw new Error('Function not implemented.');
}


function useAuth(): { login: any; logout: any; } {
  throw new Error('Function not implemented.');
}
