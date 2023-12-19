import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projeto } from '../models/Projeto';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  private apiUrl = `${environment.baseApiUrl}/Projeto`

  constructor(private http: HttpClient) { }


  GetProjetos() : Observable<Response<Projeto[]>> {
      return this.http.get<Response<Projeto[]>>(this.apiUrl);
  }

  GetProjeto(id: number) : Observable<Response<Projeto>> {
    return this.http.get<Response<Projeto>>(`${this.apiUrl}/${id}`);
  }

  CreateProjeto(projeto: Projeto) : Observable<Response<Projeto[]>> {
    return this.http.post<Response<Projeto[]>>(`${this.apiUrl}`, projeto);
  }

  EditProjeto(projeto : Projeto) : Observable<Response<Projeto[]>> {
      return this.http.put<Response<Projeto[]>>(`${this.apiUrl}`, projeto);
  }

  InativaProjeto(id: number) : Observable<Response<Projeto[]>>{
      return this.http.put<Response<Projeto[]>>(`${this.apiUrl}/inativaProjeto/${id}`, id);
  }

  ExcluirProjeto(id: number) : Observable<Response<Projeto[]>>{
    return this.http.delete<Response<Projeto[]>>(`${this.apiUrl}?id=${id}`)
  }
}
