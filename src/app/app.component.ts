import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Bienvenue chez {{ companyName }}</h1>
      <p>{{ companyDescription }}</p>
      <div>
        <h2>Nos Services</h2>
        <ul>
          <li>Audit de sécurité</li>
          <li>Conseil en sécurité informatique</li>
          <li>Protection contre les cyberattaques</li>
          <li>Formation en cybersécurité</li>
        </ul>
      </div>
      <div>
        <h2>Contactez-nous</h2>
        <p>Email: contact@fares-tech-secure.com</p>
        <p>Téléphone: +123456789</p>
      </div>
    </div>
  `,
  styles: [`
    .container { font-family: Arial, sans-serif; margin: 20px; }
    h1 { color: #0275d8; }
    h2 { color: #5cb85c; }
    ul { list-style-type: none; padding: 0; }
    li { padding: 4px; }
  `]
})
export class AppComponent {
  companyName = 'Fares Tech Secure';
  companyDescription = `Fares Tech Secure est une entreprise leader dans le domaine de la cybersécurité, offrant une gamme complète de services pour protéger votre entreprise contre les cybermenaces.`;
}
