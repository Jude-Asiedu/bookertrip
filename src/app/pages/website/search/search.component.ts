
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  imports: [SharedModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

   constructor(private http:HttpClient){

   }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  getAllFlights(){
    
  }

}
