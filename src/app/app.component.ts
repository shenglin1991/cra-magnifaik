import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CraFeatureComponent } from '@cra/feature';

@Component({
  standalone: true,
  imports: [CraFeatureComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'CRA';
}
