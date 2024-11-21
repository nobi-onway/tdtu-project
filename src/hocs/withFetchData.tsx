import useFetch from "@/hooks/useFetch";

type withFetchDataPropType<T> = {
    data: T
}

function withFetchData<TC,T>(WrappedComponent : React.ComponentType<withFetchDataPropType<T>>, apiUrl : string) {
    return (props : TC) => {
        const {data, isLoading, isError} = useFetch(apiUrl);

        if(isLoading || isError) return <></>
        return <WrappedComponent {...props} data={data}/>
    };
}

export default withFetchData;