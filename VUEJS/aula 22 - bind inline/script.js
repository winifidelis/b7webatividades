let app = new Vue({
	el: '#app',
	data: {
		aviso: 'Alguma mensagem de aviso',
		avisoStyles:{
			border: '2px solid #000',
			backgroundColor: '#FF0000',
			color: '#FFF',
			fontSize: '10px',
		},
		avisoBase:{
			border: '2px solid #000',
			fontSize: '24px',
			padding: '10px'
		},
		avisoError:{
			backgroundColor: '#FF0000',
			color: '#FFF',
			fontSize: '30px',
		}
	},
	methods: {

	},
	computed: {

	}
});