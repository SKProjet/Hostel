import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }


  clickLogout(): void {

    const apiUrl = 'http://localhost:3000/api/users/logout?access_token=2fpo1G8qf6ysc5VkPwinOnALkVaI2pJyzhJBFaqCmTGM9CayE03mBvfsP4I1M8KJ';
    this.http.post(
      apiUrl,
      null).subscribe();
    this.router.navigate(['/']);
  }

  clickCancel() {
    this.router.navigate(['/']);
  }
}
