import { makeRequest } from "./fetch"
import { METADATA_SERVER } from "../constants/server"

export const getDateList = () => {    
    return makeRequest('GET', `${METADATA_SERVER}/date-list`)
}

export const getImageListByDate = (date) => {
    return makeRequest('GET', `${METADATA_SERVER}/filter-by-date?date=${date}`)
}

export const getMetadataById = (id) => {
    return makeRequest('GET', `${METADATA_SERVER}/get-metadata-by-id?id=${id}`)
}