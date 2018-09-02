import { Search } from './search';

export class BingSearch extends Search {
  protected baseUrl = 'https://www.bing.com/search';
  constructor() {
    super('Bing');
  }
}
