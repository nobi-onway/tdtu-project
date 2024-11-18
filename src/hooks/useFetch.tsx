import { BASE_URL } from "@/config/apiConfig";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useFetch(url : string) {
    return useQuery({
        queryKey: [`${url}`],
        queryFn: () =>
          axios.get(`${BASE_URL}${url}`).then((res) =>
            res.data,
          ),
      });
}

export default useFetch;