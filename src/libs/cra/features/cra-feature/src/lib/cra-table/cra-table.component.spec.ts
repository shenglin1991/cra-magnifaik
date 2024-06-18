import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CraTableComponent } from './cra-table.component';

describe('CraTableComponent', () => {
  let component: CraTableComponent;
  let fixture: ComponentFixture<CraTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CraTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
