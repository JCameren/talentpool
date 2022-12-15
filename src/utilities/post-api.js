import sendRequest from "./send-request"

const BASE_URL = '/api/posts'

export const index = async () => {
    return sendRequest(BASE_URL)
}

export const create = async (postData) => {
    return sendRequest(BASE_URL, 'POST', postData)
}