import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/config/apiConfig";


function useDelete(url : string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id : string) => axios.delete(`${BASE_URL}${url}/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [url]})
        }
    });
}

export default useDelete;