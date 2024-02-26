import axios, { AxiosError } from 'axios'

const API_SERVICE = axios.create({
    baseURL: 'https://restcountries.com/v2/',
    timeout: 120_000,
})

API_SERVICE.interceptors.request.use(
    (request) => {
        request.params = { ...request.params }

        return request
    },
    (error) => {
        return Promise.reject(error)
    },
)

API_SERVICE.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        catcherServerApi(error)
        return Promise.reject(error)
    },
)

export default API_SERVICE

export const catcherServerApi = (error: unknown) => {
    if (error instanceof AxiosError) {
        const newCase = error?.response?.status || error.status

        switch (newCase) {
            default: {
            }
        }
    } else return 'Internal Error'
}
