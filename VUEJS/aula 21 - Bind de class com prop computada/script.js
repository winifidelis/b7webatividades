let app = new Vue({
	el: '#app',
	data: {
		errorMsg: '',
		errorType: ''
	},
	methods: {
		showWarning: function (msg) {
			this.errorMsg = msg;
			this.errorType = 'warning'
		},
		showError: function (msg) {
			this.errorMsg = msg;
			this.errorType = 'error'
		},
		hideError: function () {
			this.errorMsg = '';
		}
	},
	computed: {
		errorDivClass: function () {
			let r = {
				ativo: false,
				warning: false,
				error: false,
			};

			if (this.errorMsg != '') {
				r.ativo = true;
			}

			if (this.errorType == 'warning') {
				r.warning = true;
				r.error = false;
			} else if (this.errorType == 'error') {
				r.warning = false;
				r.error = true;
			}

			return r;
		}
	}
});