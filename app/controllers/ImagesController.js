import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawImageToPage() {
  const image = AppState.image

  const htmlBody = document.body
  htmlBody.style.backgroundImage = `url(${image.largeImgUrl})`
}
export class ImagesController {
  constructor() {
    // console.log('image controller is locked and loaded');

    this.getImage()

    AppState.on('image', _drawImageToPage)
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }
}