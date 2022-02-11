import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-room',
  templateUrl: './rent-room.component.html',
  styleUrls: ['./rent-room.component.scss']
})
export class RentRoomComponent implements OnInit {
  _url="assets/Data/room.json";
 

  constructor( private _http:HttpClient) { }
  onSubmit(data)
  {
    // this._http.post(this._url,data).subscribe((result)=>
    // {
    //   console.warn("result",result)

    // })
    console.warn(data);
    
    
  }

  ngOnInit(): void {
  }

}
