import { makeRequest } from "./fetch"
import { METADATA_SERVER } from "../constants/server"

export const getDateList = () => {
    return makeRequest(`${METADATA_SERVER}/date-list`)
}

export const getImageListByDate = (date) => {
    return makeRequest(`${METADATA_SERVER}/filter-by-date?date=${date}`)
}