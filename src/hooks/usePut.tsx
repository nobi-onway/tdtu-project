import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/config/apiConfig";
import { ProductType } from "@/config/dataType";

type UsePutPropType = {
    url: string,
    id: string,
}

function usePut<T>(props : UsePutPropType) {
    const {url, id} = props;
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data : T) => axios.put(`${BASE_URL}${url}/${id}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: [url]})
        }
    });
}

export default usePut;