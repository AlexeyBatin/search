import { Search } from './search';

export class GoogleSearch extends Search {
  protected baseUrl = 'https://www.google.com.ua/search';
  constructor() {
    super('Google');
  }
}
