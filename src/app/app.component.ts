import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'recipes-demo';
}
