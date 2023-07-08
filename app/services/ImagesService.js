import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class ImagesService {
  async getImage() {
    const res = await api.get('api/images')
    // console.log('here is a new image', res.data);

    const newImage = res.data

    AppState.image = newImage
    // console.log('this is the newImage', newImage);
  }

}

export const imagesService = new ImagesService()