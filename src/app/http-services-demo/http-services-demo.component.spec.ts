import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServicesDemoComponent } from './http-services-demo.component';

describe('HttpServicesDemoComponent', () => {
  let component: HttpServicesDemoComponent;
  let fixture: ComponentFixture<HttpServicesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpServicesDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpServicesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
