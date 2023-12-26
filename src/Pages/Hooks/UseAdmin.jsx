import React from 'react';
import UseAuth from './UseAuth';
import UseAxiosPublic from './UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const UseAdmin = () => {
    const {user,loading} = UseAuth()
    const axiosPublic = UseAxiosPublic();
    const  {data:isAdmin,isPending:isAdminLoading} = useQuery({
        queryKey:[user.email,"isAdmin"],
        enabled:!loading,
        queryFn:async()=>{
            const res = await axiosPublic.get(`/users/admin${user.email}`)
            console.log(res.data);
            return res.data?.admin
        },
       

    })
    return [isAdmin,isAdminLoading]
       
};

export default UseAdmin;