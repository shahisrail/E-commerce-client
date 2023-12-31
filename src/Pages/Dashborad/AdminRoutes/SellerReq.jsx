/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";

import { VscCheck, VscChromeClose } from "react-icons/vsc";
import Swal from "sweetalert2";
import UsesallerDetails from "../../Hooks/UsesallerDetails";
import UseSecure from "../../Hooks/UseSecure";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const SellerReq = () => {
  const [adminSaller, loading, refetch] = UsesallerDetails();
  const axiosSecure = UseSecure();

  const handlePublisetatus = async (id, status) => {
    try {
      const response = await axiosSecure.patch(`/adminSaller/${id}`, {
        status,
      });
      console.log(response.data);
      refetch([]);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleUnPublisetatus = async (id, status) => {
    try {
      const { value: enteredMessage } = await Swal.fire({
        title: "Please gave your Feedback",
        input: "text",
        inputPlaceholder: "Type your message",

        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      });

      if (enteredMessage) {
        const response = await axiosSecure.put(`/adminSaller/${id}`, {
          status,
          enteredMessage,
        });
        console.log(response.data);
        refetch();

        Swal.fire({
          text: "Send Your FeedBack.",
          icon: "success",
        });
      } else {
        Swal.fire("Message is required!", "", "error");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  console.log();
  const getStatusIcon = (status) => {
    if (status === "Published") {
      return (
        <div classNameName="flex  items-center gap-3">
          <span>Published </span>
          <VscCheck />
        </div>
      );
    }
  };
  const getStatusIcon2 = (status) => {
    if (status === "UnPublished") {
      return <VscChromeClose />;
    }
  };

  return (
    // <div>
    //   <div classNameName=" ">
    //     <h2>length:{adminSaller.length}</h2>
    //   </div>
    //   <div classNameName="overflow-x-auto">
    //     <table classNameName="table">
    //       {/* head */}
    //       <thead>
    //         <tr classNameName="border">
    //           <th classNameName="border">#</th>
    //           <th classNameName="border">email</th>
    //           <th classNameName="border">Category</th>
    //           <th classNameName="border">Titale</th>
    //           <th classNameName="border">Descriptoin </th>
    //           <th classNameName="border">Published </th>
    //           <th classNameName="border">UnPublised</th>
    //         </tr>
    //       </thead>

    //       <tbody classNameName="border">
    //         {adminSaller.map((item, index) => (
    //           <tr classNameName="border" key={item._id}>
    //             <th classNameName="border">{index + 1} </th>
    //             <td classNameName="border">
    //               <div classNameName="flex items-center gap-3">
    //                 <div classNameName="">{item.email}</div>
    //               </div>
    //             </td>
    //             <td classNameName="border">
    //               <div classNameName="flex items-center gap-3">
    //                 <div classNameName="">{item.category}</div>
    //               </div>
    //             </td>
    //             <td classNameName="border"> {item.titale} </td>
    //             <td classNameName="border"> {item.Descriptoin} </td>
    //             <td classNameName="border">
    //               {item.status !== "Published" && (
    //                 <button
    //                   onClick={() => handlePublisetatus(item._id, "Published")}
    //                 >
    //                   {item.status}
    //                 </button>
    //               )}
    //               {getStatusIcon(item.status)}
    //             </td>

    //             <td classNameName="border">
    //               <button>
    //                 {item.status !== "UnPublished" && (
    //                   <button
    //                     onClick={() =>
    //                       handleUnPublisetatus(item._id, "UnPublished")
    //                     }
    //                   >
    //                     UnPublished
    //                   </button>
    //                 )}
    //                 {getStatusIcon2(item.status)}
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
      {adminSaller.map((product) => (
        <div class="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="p-8 w-[400px] h-[300px] rounded-t-lg"
              src={product.image}
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Saller Name: {product.Sallername}
              </h5>
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Category: {product.category}
              </h5>
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Product Brand: {product.Brand}
              </h5>
              <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Price: {product.price}
              </h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <div class="flex items-center justify-between">
            <button className="btn">
            {product.status !== "Published" && (
                <button
                  onClick={() => handlePublisetatus(product._id, "Published")}
                >
                  {product.status}
                </button>
              )}
              {getStatusIcon(product.status)}
            </button>

             <button className="btn">
             {product.status !== "UnPublished" && (
                <button
                  onClick={() => handleUnPublisetatus(product._id, "UnPublished")}
                >
                  UnPublished
                </button>
              )}
              {getStatusIcon2(product.status)}
             </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellerReq;
