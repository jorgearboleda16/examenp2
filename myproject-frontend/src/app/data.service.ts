import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000'; // Asegúrate de que coincide con el puerto de tu servidor Express

  constructor(private http: HttpClient) { }

  getTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tipos`);
  }

  getDevices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/dispositivos`);
  }

  addDevice(device: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/dispositivos`, device);
  }
}