let app = new Vue({
	el: '#app',
	data: {
		contagem: 0
	},
	methods: {
		addContagem:function(x, e){

			e.preventDefault();

			this.contagem += x;
		},
		algo:function(){
			this.contagem++;
		}
	},
	computed: {

	}
});