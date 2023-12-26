
import React from 'react';
import UseAuth from './UseAuth';
import { useQuery } from '@tanstack/react-query';
import UseSecure from './UseSecure';

const UseSaller = () => {
    const {user,loading} = UseAuth()
    // console.log(user?.email);
    const axiosSecure = UseSecure()
    const  {data:isSaller,isPending:isSallerLoading} = useQuery({
        queryKey:[user?.email,"isSaller"],
        enabled:!loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/saller/${user?.email}`)
            console.log(res.data);
            return res.data?.saller
        },
       

    })
    // console.log(isSaller);
    return [isSaller,isSallerLoading]
       
};

export default UseSaller;