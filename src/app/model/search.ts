export abstract class Search {

  constructor(public name: string) { }

  fixedEncodeURIComponent (str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  }

  abstract searchRequest(query: string): void;
}
