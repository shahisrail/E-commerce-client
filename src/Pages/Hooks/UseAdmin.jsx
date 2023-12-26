import React from 'react';
import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';
import UseSecure from './UseSecure';

const UseAdmin = () => {
    const {user,loading} = UseAuth()
    // console.log(user?.email);
    const axiosSecure = UseSecure()
    const  {data:isAdmin,isPending:isAdminLoading} = useQuery({
        queryKey:[user?.email,"isAdmin"],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log(res.data);
            return res.data?.admin
        },
       

    })
    // console.log(isAdmin);
    return [isAdmin,isAdminLoading]
       
};

export default UseAdmin;