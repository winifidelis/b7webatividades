export class Pessoa {
    public id: number;
    public nome: string;
    public idade: number;

    constructor(id: number, nome: string, idade: number){
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    public getTipo(){
        if(this.idade>=0 && this.idade <= 15){
            return 'Criança';
        }
        if(this.idade>=16 && this.idade <= 20){
            return 'jovem';
        }
        if(this.idade>=21 && this.idade <= 50){
            return 'Adulto';
        }
        if(this.idade>=51 && this.idade <= 60){
            return 'Velho';
        }
        if(this.idade>=61){
            return 'Pé na cova';
        }
        return 'eita';
    }
}
