export class Image {
  constructor(data) {
    this.largeImgUrl = data.largeImgUrl
  }

  get NewBackgroundImage() {
    return `
    <body style="background-image: url(${this.largeImgUrl})"
    `
  }
}

// let imageData = {
//   "url": "https://pixabay.com/get/g82d8cb798231f5c2c08a508987906eeb7933a40bb52fcddfa223a029c8b8ce803e67f75da92407978f3e30b35e27879511bd0d9fb2732624af9c5f15ab474df3_640.jpg",
//   "imgUrl": "https://pixabay.com/get/g82d8cb798231f5c2c08a508987906eeb7933a40bb52fcddfa223a029c8b8ce803e67f75da92407978f3e30b35e27879511bd0d9fb2732624af9c5f15ab474df3_640.jpg",
//   "largeImgUrl": "https://pixabay.com/get/gce0bed3e3c91088312bb6d52165517b0a95abacf2bab22953479a40180cd69430b580e3065f4cf43d5a2ff6c11e7cc0b1a1505f4dbacd05b712924b4972a0706_1280.jpg",
//   "tags": "people, woman, travel",
//   "author": "StockSnap",
//   "query": "mountain"
// }