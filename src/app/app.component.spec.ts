import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CraFeatureComponent } from '@cra/feature';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, CraFeatureComponent, RouterTestingModule],
    }).compileComponents();
  });
});
