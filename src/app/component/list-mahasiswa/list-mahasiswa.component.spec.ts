import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMahasiswaComponent } from './list-mahasiswa.component';

describe('ListMahasiswaComponent', () => {
  let component: ListMahasiswaComponent;
  let fixture: ComponentFixture<ListMahasiswaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMahasiswaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
