let app = new Vue({
	el: '#app',
	data: {
		primeiroNome: '',
		segundoNome: '',
	},
	methods: {

	},
	computed: {
		nomecompletComputed:function(){
			return this.primeiroNome + ' ' + this.segundoNome
		},
		nomeCompleto:{
			get:function(){
				return this.primeiroNome + ' ' + this.segundoNome
			},
			set:function(novoValor){
				let nomes = novoValor.split(' ');
				this.primeiroNome = nomes[0];
				this.segundoNome = nomes[1]
			}
		}
	}
});