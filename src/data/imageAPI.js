import { IMAGE_SERVER } from "../constants/server"

export const getImageSrc = (imageId) => {
    return IMAGE_SERVER + '/' + imageId.slice(0, 6) + '/' + imageId.slice(6, 8) + '/' + imageId + ".webp"
}