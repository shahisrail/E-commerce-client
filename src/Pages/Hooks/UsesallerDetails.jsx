import { useQuery } from "@tanstack/react-query";
import UseSecure from "./UseSecure";

const UsesallerDetails = () => {
  const axiosSecure = UseSecure()
  const {
    data: adminSaller = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["adminSaller"],
    queryFn: async () => {
      const res = await axiosSecure.get("/adminSaller");
      return res.data;
    },
  });
  return [adminSaller, loading, refetch];
};

export default UsesallerDetails;
