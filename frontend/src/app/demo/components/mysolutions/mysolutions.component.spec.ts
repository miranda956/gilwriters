import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysolutionsComponent } from './mysolutions.component';

describe('MysolutionsComponent', () => {
  let component: MysolutionsComponent;
  let fixture: ComponentFixture<MysolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
