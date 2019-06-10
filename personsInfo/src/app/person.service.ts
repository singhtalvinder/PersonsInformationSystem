import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persons } from 'src/model/persons';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
         //'http://localhost:8080/persons'
  _url = '/persons';

  constructor(private _http: HttpClient) { }

  // Get all persons.
  public getPersons(_url?:string) {
    console.log(`Request going to : ${this._url}`)
    return this._http.get<Persons[]>(`${this._url}`);
  }

  // Get persons based on the search criteria. It could be either, one or none.
  public getPersonswithCriteria(person: Persons) {
    console.log(`Criteria Request going to : ${this._url} , parameters: ${person.firstName}, ${person.lastName}`);

    return this._http.get<Persons[]>(`${this._url}/find`, {
      params: {
        fName: person.firstName,
        lName: person.lastName
        }
    });
  }
}
