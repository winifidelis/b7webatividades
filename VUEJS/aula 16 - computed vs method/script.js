let app = new Vue({
	el: '#app',
	data: {
		nome: 'Winicius',
		numero: 7
	},
	methods: {
		nomeInvertidoM: function () {
			return this.nome.split('').reverse().join('');
		},
		aleatorioM: function () {
			let al = Math.floor(Math.random() * 100);
			return this.numero + ' + ' + al + '=' + (al + this.numero);
		}
	},
	computed: {
		nomeInvertido: function () {
			return this.nome.split('').reverse().join('');
		},
		aleatorio: function () {
			let al = Math.floor(Math.random() * 100);
			return this.numero + ' + ' + al + '=' + (al + this.numero);
		}
	}
});