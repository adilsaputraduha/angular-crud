import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-mahasiswa',
  templateUrl: './detail-mahasiswa.component.html',
  styleUrls: ['./detail-mahasiswa.component.css'],
})
export class DetailMahasiswaComponent implements OnInit {
  currentMahasiswa = null;
  mahasiswa = {
    nobp: '',
    nama: '',
    jurusan: '',
  };
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getMahasiswa(this.route.snapshot.paramMap.get('nobp'));
  }

  getMahasiswa(nobp) {
    this.api.getDataMahasiswaById(nobp).subscribe(
      (data) => {
        this.currentMahasiswa = data['data'];
        this.mahasiswa.nobp = nobp;
        this.mahasiswa.nama = data['data'][0]['nama'];
        this.mahasiswa.jurusan = data['data'][0]['jurusan'];
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  edit() {
    this.api
      .editDataMahasiswa({
        nobp: this.mahasiswa.nobp,
        nama: this.mahasiswa.nama,
        jurusan: this.mahasiswa.jurusan,
      })
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/mahasiswa']);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  delete() {
    this.api.deleteDataMahasiswa({ nobp: this.mahasiswa.nobp }).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/mahasiswa']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
