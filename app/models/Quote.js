export class Quote {
  constructor(data) {
    this.description = data.content
    this.author = data.author

  }

  get QuoteTemplate() {
    return `
    <p class="fs-2">"${this.description}"</p>
    <p class="fs-3 hidden">By ${this.author}</p>
    `
  }
}

// let quoteData = {
//   "_id": "e0H2BdwC-Of",
//   "author": "The Buddha",
//   "content": "Whatever is not yours: let go of it. Your letting go of it will be for your long-term happiness & benefit.",
//   "tags": [
//       "Wisdom",
//       "Happiness"
//   ],
//   "authorSlug": "the-buddha",
//   "length": 106,
//   "dateAdded": "2023-03-30",
//   "dateModified": "2023-04-14"
// }