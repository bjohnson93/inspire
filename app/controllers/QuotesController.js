import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuote() {
  const quote = AppState.quote

  // @ts-ignore
  setHTML('quoteDisplay', quote.QuoteTemplate)
}
export class QuotesController {
  constructor() {
    // console.log('quotes controller is loaded to router');
    this.getQuote()

    AppState.on('quote', _drawQuote)
  }


  async getQuote() {
    try {
      await quotesService.getQuote()
    } catch (error) {
      Pop.error(error.message)
      console.error(error)
    }
  }
}