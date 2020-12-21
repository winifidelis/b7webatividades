let app = new Vue({
	el: '#app',
	data: {
		aviso: true,
		divid: 'qualquer',
		link: 'https://www.google.com.br',
		n: 14,

	},
	methods: {
		clicou: () => {
			alert("Eventou funcionou. Clicou!");
		},
		enviou:()=>{
			alert("Enviou");
		}
	}
});