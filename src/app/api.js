import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    // credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;   
        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions);
//     if (result.error && result.error.status === 403) {
//         // I'm supposed to do  refresh logic here but I don't have a refresh token in the backend, so I'll just log out the user for now
//         console.log("call for refresh");
//         api.dispatch(logOut());
//     }else{
//         api.dispatch(logOut());
//     }
//     return result;
// }

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: (builder) => ({}),
});