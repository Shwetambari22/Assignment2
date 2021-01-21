import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.getUserName();
    })
  }

  getUserName() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('username');

    //get the param id string . conver string to a number using the + symbol
    if(hasCategoryId) {
      this.userName = this.route.snapshot.paramMap.get('username');
    } else {
      //when category id not available, default to category 1
      this.userName = "User";
    }
  }

}
