import { Component } from '@angular/core';

import {Pessoa} from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'olha só';
  nome = 'Winicius Fidelis';
  idade = 90;
  nomes = ['Arthur', 'Augusto', 'Rafael'];
  nomePrincipal = this.nomes[0]+' Fidelis';

  objetos = [
    {nome: 'Winicius', idade: 90},
    {nome: 'Anne', idade: 20},
    {nome: 'Theo', idade: 60},
    {nome: 'Catatau', idade: 2},
  ];

  pessoas=[
    new Pessoa(1,'Pedro',10),
    new Pessoa(2,'Tiago',30),
    new Pessoa(3,'João',40),
    new Pessoa(4,'Serafim',50),
    new Pessoa(5,'Camargo',60),
    new Pessoa(6,'Otávio',70),
    new Pessoa(7,'Jamal',80),
    new Pessoa(8,'Bebê',2)
  ]

  showAviso=true;
  avisoMsg = 'Este é um aviso';

  showInput='true'

  imagem = 'https://www.google.com.br/google.jpg'

  tamanhoFont = '12px';

  corPrincipal = '#FF0000';

  trocarCor = function(cor: string){
    this.corPrincipal = cor;
  }

  clicou = function(pessoa: Pessoa){
    alert('clicou em: '+pessoa.nome);
    alert('clicou em um '+pessoa.getTipo());
  }

  nomeDeEvento = 'Evento'
  trocarNome = function(novoNome: string){
    this.nomeDeEvento = novoNome
  }

  addPessoa = function(nome: string, idade: number) {
    this.pessoas.push( new Pessoa((this.pessoas.length+1), nome, idade) );
  }
}
