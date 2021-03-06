import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-mahasiswa',
  templateUrl: './add-mahasiswa.component.html',
  styleUrls: ['./add-mahasiswa.component.css'],
})
export class AddMahasiswaComponent implements OnInit {
  nobp: '';
  nama: '';
  jurusan: '';
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  save() {
    const data = {
      nobp: this.nobp,
      nama: this.nama,
      jurusan: this.jurusan,
    };

    this.api.addDataMahasiswa(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
