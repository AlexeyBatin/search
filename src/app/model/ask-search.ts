import { Search } from './search';

export class AskSearch extends Search {
  protected baseUrl = 'https://uk.ask.com/web';
  constructor() {
    super('Ask');
  }
}
