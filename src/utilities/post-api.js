import sendRequest from "./send-request"

const BASE_URL = '/api/posts'

export const index = async () => {
    return sendRequest(BASE_URL)
}

export const show = async (postId) => {
    return sendRequest(`${BASE_URL}/${postId}`)
}

export const create = async (postData) => {
    return sendRequest(BASE_URL, 'POST', postData)
}

export const getPostsApplied = async () => {
    return sendRequest(`${BASE_URL}/account`)
}

export const applyToJob = async (postId, post) => {
    return sendRequest(`${BASE_URL}/${postId}`, "PUT", post)
}

export const getJobListings = async () => {
    return sendRequest(`${BASE_URL}/jobs`)
}

export const deleteJobListing = async (postId) => {
    return sendRequest(`${BASE_URL}/${postId}`, "DELETE")
}

export const unapplyFromPost = async (postId) => {
    return sendRequest(`${BASE_URL}/${postId}/unapply`, "DELETE")
}