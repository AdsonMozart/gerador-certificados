import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";



import { BaseUi } from "./_components/base-ui/base-ui";
import { Certificado } from './pages/certificado/certificado';
import { Certificados } from './pages/certificados/certificados';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi, Certificado, Certificados ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = false;
}
