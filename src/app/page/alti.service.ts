import { Alties } from './alties/alties.component';
import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNull, isUndefined } from 'lodash';
import { HttpModule } from '@angular/http';

@Injectable()
export class AltiService {

  private __headers: HttpHeaders;
  private _host: string;
  private _authToken: string;
    // private entity_url = environment.REST_API_URL + 'alties';
    private entity_url = 'http://localhost:8080/';
constructor(private _http: Http , private http: HttpClient ) { }

getAlties(): Observable<Alties[]> {
    return this._http.get(this.entity_url + 'v1/manage/candidate/getAll')
      .map((response: Response) => <Alties[]> response.json());
    //   .catch(this.handleError);
  }
  getAltiesById(altiId: string): Observable<Alties> {
    return this._http.get(this.entity_url + 'v1/manage/candidate/get?id=' + altiId)
      .map((response: Response) => <Alties> response.json());
    //   .catch(this.handleError);
  }
  addAlties(alties: Alties): Observable<Alties> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log(JSON.stringify(alties));
    return this._http.post(this.entity_url + 'v1/manage/candidate/add', JSON.stringify(alties), {headers})
      .map((response: Response) => <Alties> response.json());
    //   .catch(this.handleError);
  }
  ss(alties: Alties): Observable<Alties> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    console.log(JSON.stringify(alties));
    return this._http.post(this.entity_url + 'v1/manage/schedue', JSON.stringify(alties), {headers})
      .map((response: Response) => <Alties> response.json());
    //   .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.log('handleError log: ');
    let errMsg: string;
    if (error instanceof Response) {
      if (!(error.text() === '' )) {  // if response body not empty
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        console.log('binding errors header not empty');
        errMsg = error.headers.get('errors').toString();
      }
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
