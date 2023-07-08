import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js"

class QuotesService {
  async getQuote() {
    const res = await api.get('api/quotes')
    // console.log('here is the data from the response for quotes', res.data);
    const newQuote = new Quote(res.data)
    // console.log(newQuote, 'newQuote data');
    AppState.quote = newQuote
    console.log(AppState.quote);
  }

}

export const quotesService = new QuotesService()