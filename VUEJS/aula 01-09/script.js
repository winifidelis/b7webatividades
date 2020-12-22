
let app = new Vue({
    el: '#app',
    data: {
        frase: 'Olá mundo!'
    }
});

let app2 = new Vue({
    el: '#app2',
    data: {
        frase: 'Olá <strong>mundo!</strong>'
    }
});

let app3 = new Vue({
    el: '#app3',
    data: {
        frase: 'Vai Corinthians!'
    }
});

let placar = new Vue({
    el: '#placar',
    data: {
        n: 0,
        aparecer: true
    }
});

let lista = new Vue({
    el: '#lista',
    data: {
        nomes: [
            { nome: 'Wincius', sobrenome: 'Fidelis', idade: 99 },
            { nome: 'Theo', sobrenome: 'Paniago', idade: 10 },
            { nome: 'Anne', sobrenome: 'Cavalcante', idade: 15 },
            { nome: 'Joao', sobrenome: 'Feijão', idade: 03 },
            { nome: 'Maria', sobrenome: 'Bolacha', idade: 50 },
        ]
    }
});

let app4 = new Vue({
    el: '#app4',
    data: {
        texto: 'Vai Corinthians!'
    }
});

let app5 = new Vue({
    el: '#app5',
    data: {
        n1: 10,
        n2: 15,
        n3: 0
    }
});

let soma = new Vue({
    el: '#soma',
    data: {
        n1: Math.floor(Math.random() * 30),
        n2: Math.floor(Math.random() * 30),
        n3: 0
    }
});

let metodo = new Vue({
    el: '#metodo',
    data: {
        nome: 'Winicius',
        idade: 90
    },
    methods: {
        mostrar: (nome) => {
            let txt = 'Olá, ' + nome;
            return txt;
        }
    }
});

function bandeira(pais) {
    return "<img src='paises/" + pais + ".png' />"
}
let paises = new Vue({
    el: '#paises',
    data: {
        pais: '',
        argentina: bandeira('argentina'),
        brazil: bandeira('brazil'),
        china: bandeira('china'),
        uk: bandeira('uk'),
        usa: bandeira('usa')
    },
    methods: {

    }
});

paises.pais = 'brazil';

let paises2 = new Vue({
    el: '#paises2',
    data: {
        pais: '',
        argentina: bandeira('argentina'),
        brazil: bandeira('brazil'),
        china: bandeira('china'),
        uk: bandeira('uk'),
        usa: bandeira('usa')
    },
    methods: {

    }
});

paises2.pais = 'brazil';

let paises3 = new Vue({
    el: '#paises3',
    data: {
        argentina: bandeira('argentina'),
        brazil: bandeira('brazil'),
        china: bandeira('china'),
        uk: bandeira('uk'),
        usa: bandeira('usa')
    },
    methods: {
        paises: function () {
            return [
                { bandeira: this.argentina, continente: 'América do Sul' },
                { bandeira: this.brazil, continente: 'América do Sul' },
                { bandeira: this.china, continente: 'Ásia' },
                { bandeira: this.uk, continente: 'Europa' },
                { bandeira: this.usa, continente: 'América do Norte' },
            ];
        }
    }
});

//criando um componente

Vue.component("pais", {
    props:['nome'],
    template:`<p v-html="nome"></p>`
});


let ciclodevida = new Vue({
    el: '#ciclodevida',
    data: {
        nome: 'winicius'
    },
    beforeCreate:function(){
        //tem que ser funcion pois ela ainda não existe e não terá acesso ao this.
        //isso aqui é mais usado para modificar um elemento que já está na tela
        //alert(this.nome);
    },
    created:function(){
        //o elemento foi criado, já está rodando
        //está criado na memória mas ainda não foi renderizado na tela
        //alert(this.nome);
    },
    beforeMount:function(){
        //já foi criado, mas ainda não foi exibido nada na tela
    },
    mounted:function(){
        //o item já foi exibido na tela
    },
    beforeUpdate:function(){
        //antes de atualizar
        //consigo realizar algo antes da atualização
    },
    updated:function(){
        //é um item a disposição
    },
    beforeDestroy:function(){

    },
    destroyed:function(){

    }
});


