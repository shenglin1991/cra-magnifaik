import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CraFeatureComponent } from './cra-feature.component';

describe('CraFeatureComponent', () => {
  let component: CraFeatureComponent;
  let fixture: ComponentFixture<CraFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CraFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
