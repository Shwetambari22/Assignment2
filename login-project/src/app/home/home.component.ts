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
    const hasUserName: boolean = this.route.snapshot.paramMap.has('username');

    if(hasUserName) {
      this.userName = this.route.snapshot.paramMap.get('username');
    } else {
      this.userName = "User";
    }
  }
}
