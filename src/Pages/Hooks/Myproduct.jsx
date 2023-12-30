// import React from 'react';

// const Myproduct = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Myproduct;


import { useQuery } from "@tanstack/react-query";
import UseAxiosHoks from "./UseAxiosHoks";
import UseAuth from "./UseAuth";

const Myproduct = () => {
  const axiosSecure = UseAxiosHoks();
  const { user } = UseAuth();

  const {
    data: myServay = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["myServay",user.email],
    queryFn: async () => {
      try {
       const res = await axiosSecure.get(`/myServay?email=${user.email}`); 
        return res.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    },
  });

  return [myServay, loading, refetch];
};

export default Myproduct;
