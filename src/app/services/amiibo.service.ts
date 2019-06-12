import { Injectable } from '@angular/core';

import { ApiService } from'../services/api.service';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { AmiiboInterface } from '../interfaces/amiiboInterface';

@Injectable({
  providedIn: 'root'
})
export class AmiibosService {

  constructor(private api: ApiService, private localStorageService: LocalStorageService) { }

  getAmiibos(): AmiiboInterface[] {
    const amiibos = this.localStorageService.get('amiibos');
    if (amiibos) {
      return amiibos;
    }
    let amiibosFromApi;
    this.api.get('amiibo/').subscribe((response: any) => {
      amiibosFromApi = response.amiibo;
      this.localStorageService.set('amiibos', amiibosFromApi);
    });
    return amiibosFromApi;
  }
}
