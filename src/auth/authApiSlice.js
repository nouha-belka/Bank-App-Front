import { apiSlice } from "../app/api";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: "/auth/login",
                method: "POST",
                body: credentials,
            })
        }),

    })
});
// RTK Query generates a hook for each endpoint that we can use in our components, which is why we export the useLoginMutation hook here
// use<EndpointName>Query   // for builder.query endpoints
// use<EndpointName>Mutation // for builder.mutation endpoints
export const { useLoginMutation } = authApiSlice; 