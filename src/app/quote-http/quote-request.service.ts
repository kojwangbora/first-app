import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quote } from '../quote-class/quote';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  quoteRequestService() {
    throw new Error('Method not implemented.');
  }
  quote!: Quote;

  constructor(private http:HttpClient) {
    this.quote= new Quote("", "");
   }
   quoteRequest(){
     interface ApiResponse{
       quote:string;
       author:string;
     }
     let promise= new Promise((resolve, reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(Response=>{
         this.quote.quote="Never, never, never give up"
         this.quote.author= "Winston Churchill"

         reject(error)
       })
     })
     return(promise)
   }
}
