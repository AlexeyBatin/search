import { Search } from './search';

export class GoogleSearch extends Search {
  protected baseUrl = 'https://www.google.com.ua/search';

  constructor() {
    super('Google');
  }

  searchRequest(query: string): void {
    const encodeQuery = encodeURI(query);
    window.location.assign(`${this.baseUrl}?q=${encodeQuery}`);
  }
}
