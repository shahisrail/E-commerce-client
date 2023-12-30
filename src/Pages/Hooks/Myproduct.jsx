import { useQuery } from "@tanstack/react-query";

import UseAuth from "./UseAuth";
import UseSecure from "./UseSecure";

const Myproduct = () => {
  const axiosSecure = UseSecure();
  const { user } = UseAuth();

  const {
    data: myProduct = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["myProduct", user?.email],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/myProduct?email=${user.email}`);
        return res.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    },
  });

  return [myProduct, loading, refetch];
};

export default Myproduct;
