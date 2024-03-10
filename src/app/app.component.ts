import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000)),
    ])
  ]
})
export class AppComponent implements OnInit {
  companyName = 'Fares Tech Secure';
  companyDescription = `Fares Tech Secure est une entreprise leader dans le domaine de la cybersécurité, offrant une gamme complète de services pour protéger votre entreprise contre les cybermenaces.`;
  
  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const components = document.querySelectorAll('.animated');
    const scrollTop = window.pageYOffset;

    components.forEach((component) => {
      const element = component as HTMLElement;
      const elementOffset = element.offsetTop;
      const distance = (elementOffset - scrollTop) - window.innerHeight;
      if (distance < 0) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }
}
