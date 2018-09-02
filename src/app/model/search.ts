export abstract class Search {
  protected baseUrl: string;
  constructor(public name: string) { }

  searchRequest(query: string): void {
    const encodeQuery = encodeURI(query);
    window.location.assign(`${this.baseUrl}?q=${encodeQuery}`);
  }
}
