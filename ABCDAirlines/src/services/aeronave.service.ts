import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Aeronave } from "../interfaces/aeronave";

const httpOptions = { 
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    })
}

@Injectable({
    providedIn: 'root'
})
export class AeronaveService {
    url = 'https://localhost:44305/api/Aeronaves';

    constructor(private http: HttpClient) {}

    getAeronaves(): Observable<Aeronave[]> {
        return this.http.get<Aeronave[]>(this.url);
    }

    createAeronave(aeronave: Aeronave): Observable<Aeronave> {
        return this.http.post<Aeronave>(this.url, aeronave, httpOptions);
    } 
}