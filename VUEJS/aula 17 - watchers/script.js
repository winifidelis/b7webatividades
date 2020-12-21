let app = new Vue({
	el: '#app',
	data: {
		conta: '',
		aviso: '',
		resultado: '',
		timer: null
	},
	methods: {
		fazerConta:function(){
			this.aviso = '';

			this.resultado = eval(this.conta);
		}
	},
	computed: {

	},
	watch: {
		//toda vez que conta or modificado ele executa a função abaixo
		conta: function () {
			this.aviso = 'Digitando...';

			if(this.timer != null){
				clearTimeout(this.timer);
			}

			this.timer = setTimeout(this.fazerConta,1000);
		}
	}
});