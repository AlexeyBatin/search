import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Search } from '../model/search';
import { SearchListService } from '../search-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  searchList: Search[];
  constructor(private _fb: FormBuilder, private _searchService: SearchListService) {
  }

  ngOnInit() {
    this.searchList = this._searchService.getSearchList();
    this.searchForm = this._fb.group({
      query: ['', [Validators.required]],
      search: [, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.searchForm.value.search.searchRequest(this.searchForm.value.query));
  }
}
