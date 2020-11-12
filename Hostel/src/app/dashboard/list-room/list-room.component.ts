import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

export class ListRoom {
  id: string;
  name: string;
}

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.sass']
})
export class ListRoomComponent implements OnInit {
  listRoom: ListRoom[];
  private readonly apiUrl = 'http://localhost:3000/api/items?access_token=2fpo1G8qf6ysc5VkPwinOnALkVaI2pJyzhJBFaqCmTGM9CayE03mBvfsP4I1M8KJ';
  private subscription: Subscription;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getList();
  }

  private getList(): void{
    this.http.get<any[]>(this.apiUrl).subscribe();
  }
}


