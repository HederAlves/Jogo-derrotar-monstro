	
	var botaoAtaqueHTML = document.querySelector('data-botao-ataque');
	var botaoAtaqueEspecialHTML = document.querySelector('data-botao-ataqueEspecial');
	var botaoCurarHTML = document.querySelector('data-botao-curar');
	var botaoDesistirHTML = document.querySelector('data-botao-desistir');

	var comandos = {

	vidaJogador: 100,
	vidaMonstro: 100,

	historicoCombate: [],

	botaoAtaque: function() {

		var danoAtaqueMonstro = Math.round(Math.random(6) * 12);
		this.vidaJogador -= danoAtaqueMonstro;
		visorVidaJogador.innerHTML = this.vidaJogador;

		var danoAtaque = Math.round(Math.random(5) * 8);	
		this.vidaMonstro -= danoAtaque;
		visorVidaMonstro.innerHTML = this.vidaMonstro;

		this.historicoCombate.push("Monstro causou dano " + danoAtaqueMonstro + "<br>" +
		"Jogador atacou o monstro " + danoAtaque + "<br>");
		log.innerHTML = this.historicoCombate;

		if(this.vidaJogador <= 0) {
			fimDeJogo.innerHTML = "Você Perdeu" + "<br><br>" + this.historicoCombate;
			visorVidaJogador.innerHTML = 0;
		}
		if(this.vidaMonstro <= 0) {
			fimDeJogo.innerHTML = "Você Venceu" + "<br><br>" + this.historicoCombate;
			visorVidaMonstro.innerHTML = 0;
		}
	},

	botaoAtaqueEspecial: function() {

		var danoAtaqueEspecial = Math.round(Math.random(7) * 11);	
		this.vidaMonstro -= danoAtaqueEspecial;
		visorVidaMonstro.innerHTML = this.vidaMonstro;

		this.historicoCombate.push("Jogador atacou o monstro " + danoAtaqueEspecial + "<br>");
		log.innerHTML = this.historicoCombate;
		
		if(this.vidaJogador <= 0) {
			fimDeJogo.innerHTML = "Você Perdeu" + "<br><br>" + this.historicoCombate;
			visorVidaJogador.innerHTML = 0;
		}
		if(this.vidaMonstro <= 0) {
			fimDeJogo.innerHTML = "Você Venceu" + "<br><br>" + this.historicoCombate;
			visorVidaMonstro.innerHTML = 0;
		}

		if(danoAtaqueEspecial == 8 || danoAtaqueEspecial == 9 || danoAtaqueEspecial == 10) {

			var danoAtaqueMonstro = Math.round(Math.random(6) * 12);
			this.vidaJogador -= danoAtaqueMonstro;
			visorVidaJogador.innerHTML = this.vidaJogador;
			this.historicoCombate.push("Monstro causou dano" + danoAtaqueMonstro + "<br>");	
			log.innerHTML = this.historicoCombate;

			if(this.vidaJogador <= 0) {
				fimDeJogo.innerHTML = "Você Perdeu" + "<br><br>" + this.historicoCombate;
				visorVidaJogador.innerHTML = 0;
			}
			if(this.vidaMonstro <= 0) {
				fimDeJogo.innerHTML = "Você Venceu" + "<br><br>" + this.historicoCombate;
				visorVidaMonstro.innerHTML = 0;
			}
		}

		if(danoAtaqueEspecial == 11 || danoAtaqueEspecial == 7) {

			var curar = Math.round(danoAtaqueEspecial / 2);
			this.vidaJogador += curar;
			visorVidaJogador.innerHTML = this.vidaJogador;
			this.historicoCombate.push("Jogador curou em " + curar + "<br>");
			log.innerHTML = this.historicoCombate
			
			if(this.vidaJogador <= 0) {
				fimDeJogo.innerHTML = "Você Perdeu" + "<br><br>" + this.historicoCombate;
				visorVidaJogador.innerHTML = 0;
			}
			if(this.vidaMonstro <= 0) {
				fimDeJogo.innerHTML = "Você Venceu" + "<br><br>" + this.historicoCombate;
				visorVidaMonstro.innerHTML = 0;
			}
		}
	},

	botaoCurar: function() {

		var danoAtaqueMonstro = Math.round(Math.random(6) * 12);
		this.vidaJogador -= danoAtaqueMonstro;
		visorVidaJogador.innerHTML = this.vidaJogador;

		var curar = Math.round(Math.random(6) * 12);
		this.vidaJogador += curar;
		visorVidaJogador.innerHTML = this.vidaJogador;

		this.historicoCombate.push("Monstro causou dano" + danoAtaqueMonstro + "<br>" +
		 "Jogador curou em " + curar + "<br>");	
		log.innerHTML = this.historicoCombate;

		if(this.vidaJogador <= 0) {
			fimDeJogo.innerHTML = "Você Perdeu" + "<br><br>" + this.historicoCombate;
			visorVidaJogador.innerHTML = 0;
		}
		if(this.vidaMonstro <= 0) {
			fimDeJogo.innerHTML = "Você Venceu" + "<br><br>" + this.historicoCombate;
			visorVidaMonstro.innerHTML = 0;
		}
	} 	
}
