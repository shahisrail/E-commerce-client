/* eslint-disable no-unused-vars */

import React from "react";
import { useState } from "react";

import { VscCheck, VscChromeClose } from "react-icons/vsc";
import Swal from "sweetalert2";
import UsesallerDetails from "../../Hooks/UsesallerDetails";
import UseSecure from "../../Hooks/UseSecure";

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
        <div className="flex  items-center gap-3">
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
    <div>
      <div className=" ">
        <h2>length:{adminSaller.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border">
              <th className="border">#</th>
              <th className="border">email</th>
              <th className="border">Category</th>
              <th className="border">Titale</th>
              <th className="border">Descriptoin </th>
              <th className="border">Published </th>
              <th className="border">UnPublised</th>
            </tr>
          </thead>

          <tbody className="border">
            {adminSaller.map((item, index) => (
              <tr className="border" key={item._id}>
                <th className="border">{index + 1} </th>
                <td className="border">
                  <div className="flex items-center gap-3">
                    <div className="">{item.email}</div>
                  </div>
                </td>
                <td className="border">
                  <div className="flex items-center gap-3">
                    <div className="">{item.category}</div>
                  </div>
                </td>
                <td className="border"> {item.titale} </td>
                <td className="border"> {item.Descriptoin} </td>
                <td className="border">
                  {item.status !== "Published" && (
                    <button
                      onClick={() => handlePublisetatus(item._id, "Published")}
                    >
                      {item.status}
                    </button>
                  )}
                  {getStatusIcon(item.status)}
                </td>

                <td className="border">
                  <button>
                    {item.status !== "UnPublished" && (
                      <button
                        onClick={() =>
                          handleUnPublisetatus(item._id, "UnPublished")
                        }
                      >
                        UnPublished
                      </button>
                    )}
                    {getStatusIcon2(item.status)}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerReq;
