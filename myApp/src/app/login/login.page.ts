import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,  // Marca el componente como standalone
  imports: [IonicModule, CommonModule, FormsModule],  // Asegúrate de que las dependencias están aquí
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      async (response) => {
        await this.authService.saveToken(response.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error de login', error);
      }
    );
  }
}
