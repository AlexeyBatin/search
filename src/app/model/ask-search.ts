import { Search } from './search';

export class AskSearch extends Search {
  protected baseUrl = 'https://uk.ask.com/web';

  constructor() {
    super('Ask');
  }

  searchRequest(query: string): void {
    const encodeQuery = encodeURI(query);
    window.location.assign(`${this.baseUrl}?q=${encodeQuery}`);
  }
}
