import { Component, OnInit } from '@angular/core';


import { AmiibosService } from '../services/amiibo.service';
import { AmiiboInterface } from '../interfaces/amiiboInterface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  constructor(private amiiboService: AmiibosService) { }


  amiibos: AmiibosComponent[];

  setAmiibos(): Subscription {
    return this.amiiboService.getAmiibos()
    .subscribe((response: any): void => this.amiibos = response.amiibo);
  }

  getAmiiboLink(head:string, tail:string): string {
    const id = head + tail;
    return `/amiibo/${id}`;
  }

  ngOnInit() {
    this.setAmiibos();
  }

}
