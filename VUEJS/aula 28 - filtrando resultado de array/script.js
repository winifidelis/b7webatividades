let app = new Vue({
	el: '#app',
	data: {
		busca: '',
		nomes: [
			'Fidelis',
			'paniago',
			'souza',
			'firmino',
			'ronaldo',
			'fenomeno'
		]
	},
	methods: {

	},
	computed: {
		nomesFiltrados: function () {
			return this.nomes.filter(function (nome) {
				if (this.busca != '') {
					if (nome.toLowerCase().indexOf(this.busca.toLowerCase()) > -1) {
						return true;
					}else{
						return false;
					}
				} else {
					return true;
				}
			}, this);
		}
	}
});