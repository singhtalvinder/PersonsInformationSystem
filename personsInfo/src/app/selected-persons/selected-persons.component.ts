import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Persons } from 'src/model/persons';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-selected-persons',
  templateUrl: './selected-persons.component.html',
  styleUrls: ['./selected-persons.component.css']
})
export class SelectedPersonsComponent implements OnInit {

  searchPerson = new Persons() ;
  public personsDetails : Persons[];
  submitted = false;

  constructor(private _personsService: PersonService,
    private _router : Router) { }

  ngOnInit() {
  }

// Submit the form.
  onSubmit() {
    this.submitted = true;
    this._personsService.getPersonswithCriteria(this.searchPerson)
    .subscribe( response => {
      console.log('Successfully sent details.', response)
      this.personsDetails = response;
    },
    (err) => {
      console.log('Failed to fetch data. Error : ' + err)
      if(err instanceof HttpErrorResponse) {
        if(err.status === 401) {
          // redirect to home.
          this._router.navigate(['/home'])
        }
      }
    });
  }
}
