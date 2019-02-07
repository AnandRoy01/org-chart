import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IList } from '../shared/interface';

@Injectable({
    providedIn:'root'
})
export class DataService{
    baseUrl = 'assets/';
    constructor(private http: HttpClient){}
    getDetails():Observable<IList[]>{
            return this.http.get<IList[]>(this.baseUrl + 'list.json');
    }
 }
