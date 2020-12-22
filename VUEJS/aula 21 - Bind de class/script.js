let app = new Vue({
	el: '#app',
	data: {
		isError: false,
		isWarning: false,
		isDanger: false,
		errorMsg: "Mensagem qualquer de erro",
		errorDivClass: {
			ativo: false,
			warning: false,
			error: false
		}
	},
	methods: {
		showWarning: function (msg) {
			this.isError = true;
			this.isWarning = true;
			this.isDanger = false;
			this.errorMsg = msg;

			this.errorDivClass.ativo = true;
			this.errorDivClass.warning = true;
			this.errorDivClass.error = false;
		},
		showError: function (msg) {
			this.isError = true;
			this.isWarning = false;
			this.isDanger = true;
			this.errorMsg = msg;

			this.errorDivClass.ativo = true;
			this.errorDivClass.warning = false;
			this.errorDivClass.error = true;
		},
		hideError: function () {
			this.isError = false;
			this.isWarning = false;
			this.isDanger = false;

			this.errorDivClass.ativo = false;
			this.errorDivClass.warning = false;
			this.errorDivClass.error = false;
		}
	},
	computed: {

	}
});