import { Search } from './search';

export class BingSearch extends Search {
  protected baseUrl = 'https://www.bing.com/search';

  constructor() {
    super('Bing');
  }

  searchRequest(query: string): void {
    const encodeQuery = this.fixedEncodeURIComponent(query);
    window.location.assign(`${this.baseUrl}?q=${encodeQuery}`);
  }
}
