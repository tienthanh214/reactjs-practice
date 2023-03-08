import { ImageMetadata } from './../components/ImageModal/ImageModal';
export const setImageModalOpen = (open : boolean) => ({
    type: "SET_IMAGE_MODAL_OPEN",
    open: open,
})

export const setImageModalData = (data : ImageMetadata) => ({
    type: "SET_IMAGE_MODAL_DATA",
    data: data,
})

export const clearImageModalData = () => ({
    type: "CLEAR_IMAGE_MODAL_DATA",
})