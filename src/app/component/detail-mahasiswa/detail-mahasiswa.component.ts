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
  nobp = null;
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
        this.nobp = nobp;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete() {
    this.api.deleteDataMahasiswa({ nobp: this.nobp }).subscribe(
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
