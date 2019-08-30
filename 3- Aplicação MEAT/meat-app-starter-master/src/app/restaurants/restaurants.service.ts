//Serviço que ira se comunicar com o backend
import {Injectable} from '@angular/core' //Como sera recebido outro serviço (http) é preciso o injectable
import {HttpClient, HttpParams} from '@angular/common/http' //Para receber requisição http (Get, Post etc...)

import{Observable} from 'rxjs/Observable' //Metodos da api http retornam observables, então é preciso retorna-lo no metodo 
import 'rxjs/add/operator/map' //Para mapear o response obtido pelo observable
import 'rxjs/add/operator/catch' //Tratamento de erros

import { Restaurant } from './item-restaurant/restaurant.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

import { MEAT_API } from '../app.api'; //API de conexão com o backend
import { errorHandler } from '@angular/platform-browser/src/browser';

@Injectable()
export class RestaurantsService {

    constructor(private http:HttpClient){}

    //Metodo para pegar todos restaurantes / ou listar o restaurante pela pesquisa
    restaurants(search?: string): Observable<Restaurant[]>{ //Metodo que ira retornar os dados dos restaurantes
        let params : HttpParams = undefined
        if(search){
            params = new HttpParams().set('q', search) //Passando parametros para o backend
        }
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params}) //Requisição http // passando parametro para servidor pesquisar (json-serve aceita um parametro generico "g" para pesquisar geral)
    }

    //Metodo para pegar restaurante por ID
    restaurantById(id:string): Observable<Restaurant>{
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
    }

    //Trazendo os reviews do restaurante
    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
    }

    //Pegando item do cardapio do menu
    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)


        //Versão 4.0.0 pra baixo precisa dos comandos abaixo para fazer requisição
        // .map(response => response.json())//Convertendo resposta em json
        // .catch(ErrorHandler.handleError) //tratamento de erro
    }
}