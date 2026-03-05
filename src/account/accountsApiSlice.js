import { apiSlice } from "../app/api";

export const accountsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAccounts: builder.query({
            query: (id) => ({
                url: `/accounts/getAccountInformationByUser/${id}`,
                method: "GET"
            }),
        }),
    }),

});

export const {useGetAccountsQuery} = accountsApiSlice;