export abstract class Search {

  constructor(public name: string) { }

  abstract searchRequest(query: string): void;
}
