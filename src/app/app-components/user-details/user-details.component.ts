import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  singleUser = [];
  multipleUsers = [];
  clickCounter = 0;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  fetchSingleUserDetails() {
    this.dataService.fetchSingleUserDetails().subscribe(res => {
      this.singleUser = res['results'];
    })
  }

  fetchMultipleUserDetails() {
    this.clickCounter++;
    this.dataService.fetchMultipleUserDetails().subscribe(res => {
      if (this.clickCounter <= 1) {
        this.multipleUsers = res['results'];
      } else {
        res.results.forEach(user => {
          this.multipleUsers.push(user)
        })
      }
    })
  }
}
