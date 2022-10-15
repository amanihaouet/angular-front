import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {
  employees: any;

  searchText: any;

  currentIndex = -1;
  pageOfItems!: Array<any>;
  mode = 'list';
  p: number = 1;
  total: number = 0;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  editUser: any;

  constructor(private router:Router, private toastService:ToastrService) { }

  ngOnInit(): void {
  }
  pageChangeEvent(event: number){
    this.p = event;
}
}
