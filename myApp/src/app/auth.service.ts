import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/login';

  constructor(private http: HttpClient, private storage: Storage) {}

  // Iniciar sesión y guardar el token
  login(email: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { email, password });
  }

  // Guardar el token en el almacenamiento
  async saveToken(token: string) {
    await this.storage.set('authToken', token);
  }

  // Obtener el token guardado
  async getToken() {
    return await this.storage.get('authToken');
  }

  // Eliminar el token del almacenamiento
  async logout() {
    await this.storage.remove('authToken');
  }

  // Comprobar si el token existe
  async isAuthenticated() {
    const token = await this.getToken();
    return token != null;
  }
}
