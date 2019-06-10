import { Component, OnInit } from '@angular/core';
import {Persons} from './../../model/persons';
import { PersonService } from '../person.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-persons',
  templateUrl: './all-persons.component.html',
  styleUrls: ['./all-persons.component.css']
})
export class AllPersonsComponent implements OnInit {

  public personsDetails : Persons[];
  constructor(private _personsService: PersonService,
    private _router : Router) { }

  ngOnInit() {
    this.getPersons()
  }

   // Get all persons.
   getPersons() {
    this._personsService.getPersons()
    .subscribe(
        data => {
          console.log(data);
      this.personsDetails = data
    },
    (err) => {
      console.log('Failed to fetch data. Error : ' + err)
      if(err instanceof HttpErrorResponse) {
        if(err.status === 401) {
          // redirect to home.
          this._router.navigate(['/home'])
        }
      }
    })
  }
  

}
