import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-mahasiswa',
  templateUrl: './add-mahasiswa.component.html',
  styleUrls: ['./add-mahasiswa.component.css'],
})
export class AddMahasiswaComponent implements OnInit {
  mahasiswa = {
    nobp: '',
    nama: '',
    jurusan: '',
  };

  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  save() {
    const data = {
      nobp: this.mahasiswa.nobp,
      nama: this.mahasiswa.nama,
      jurusan: this.mahasiswa.jurusan,
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
