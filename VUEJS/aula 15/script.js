let app = new Vue({
	el: '#app',
	data: {
		nome: 'Winicius'
	},
	methods:{

	},
	computed:{
		nomeInvertido:function(){
			return this.nome.split('').reverse().join('');
		}
	}
});