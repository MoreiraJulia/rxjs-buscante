import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  // Aqui estamos adicionando a API ao nosso preojeto, ela será representada pela constante chamada API
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }
  // metodo para buscar os dados da busca, ele recebe o valor que seria o nome dos livros que estão buscando
  buscar(valorDigitado: string): Observable<any>{
    // aqui estamos passando os parametros para busca que seria o q quem recebe o valor da busca e valorDigitado a pesquisa do cliente
    const params = new HttpParams().append('q', valorDigitado);
    return this.http.get(this.API, { params });
  }
}
