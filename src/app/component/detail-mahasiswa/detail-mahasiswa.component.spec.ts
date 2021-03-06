import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMahasiswaComponent } from './detail-mahasiswa.component';

describe('DetailMahasiswaComponent', () => {
  let component: DetailMahasiswaComponent;
  let fixture: ComponentFixture<DetailMahasiswaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMahasiswaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
