import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Modelo } from "../interfaces/modelo";

const httpOptions = { 
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    })
}

@Injectable({
    providedIn: 'root'
})
export class ModeloService {
    url = 'https://localhost:44305/api/Modeloes';

    constructor(private http: HttpClient) {}

    getAeronaves(): Observable<Modelo[]> {
        return this.http.get<Modelo[]>(this.url);
    }

    createAeronave(modelo: Modelo): Observable<Modelo> {
        return this.http.post<Modelo>(this.url, modelo, httpOptions);
    } 
}