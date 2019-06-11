import { Injectable } from '@angular/core';

import { ApiService } from'../services/api.service';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AmiibosService {

  constructor(private api: ApiService, private localStorageService: LocalStorageService) { }

  getAmiibos(): Observable<Object> {
    const amiibos = this.localStorageService.get('amiibos');
    if(amiibos) {
      return of({ amiibo: amiibos });
    }
    let amiibosFromApi;
    this.api.get('amiibo/').subscribe((response: any) => {
      amiibosFromApi = response.amiibo;
      this.localStorageService.set('amiibos', response.amiibo);

    });  
    return this.api.get('amiibo/');
  }
}
