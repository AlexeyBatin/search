import { Injectable } from '@angular/core';
import { Search } from './model/search';
import { GoogleSearch } from './model/google-search';
import { BingSearch } from './model/bing-search';
import { AskSearch } from './model/ask-search';

@Injectable({
  providedIn: 'root'
})
export class SearchListService {
  constructor() { }

  getSearchList() {
    const searchList: Search[] = [
      new GoogleSearch(),
      new BingSearch(),
      new AskSearch()
    ];
    return searchList;
  }
}
