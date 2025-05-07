import { Injectable } from '@angular/core';
import { LoginIn } from '../../models/login.interface';
import { ResponseIn } from '../../models/response.interface';
import { ListProducts } from '../../models/listProducts.interfaces';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "http://localhost:3000/";
  constructor(private http:HttpClient) { }

  loginByEmail(form:LoginIn):Observable<ResponseIn>{
    let direction= this.url+ "auth"
    return this.http.post<ResponseIn>(direction,form);
  }

  getListProducts(): Observable<ListProducts[]> {
    let direction = this.url + "products";
    return this.http.get<ListProducts[]>(direction);
  }
}
