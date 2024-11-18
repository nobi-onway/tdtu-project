import { BASE_URL } from "@/config/apiConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function usePost<T>(url : string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data : T) => axios.post(`${BASE_URL}${url}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [url]})
        }
    });
}

export default usePost;