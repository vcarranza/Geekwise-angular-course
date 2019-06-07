import { Component, OnInit } from '@angular/core';


import { AmiibosService } from '../services/amiibo.service';

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {

  constructor(private amiiboService: AmiibosService) { }

  ngOnInit() {
    this.amiiboService.getAmiibos().subscribe(amiibos =>{
      console.log(amiibos);
    })
  }

}
