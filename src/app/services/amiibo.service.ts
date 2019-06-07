import { Injectable } from '@angular/core';

import { ApiService } from'../services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmiibosService {

  constructor(private api: ApiService) { }

  getAmiibos(): Observable<Object> {
    return this.api.get('amiibo/');
  }
}
