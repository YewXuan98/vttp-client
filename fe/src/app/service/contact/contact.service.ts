import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface ContactMessage {
  name: string;
  email: string;
  message?: string | null;
}

@Injectable({
  providedIn: 'root', // This allows Angular to inject this service into the root of the application
})
export class ContactService {
  private apiUrl = 'http://localhost:8080/contacts'; // Replace with your actual endpoint

  constructor(private http: HttpClient) {}

  // Function to send contact message to the server
  sendMessage(contactMessage: ContactMessage): Observable<any> {
    return this.http.post(this.apiUrl, contactMessage);
  }
}
