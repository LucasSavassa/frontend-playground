class Inspecao {
	#id = -1;
	#state = 0;
	#hasOpenIssue = false;
	#hasClosedIssue = false;
	#me = false;
	#name = '';
	#month = '';
	
	constructor(id, state, hasOpenIssue, hasClosedIssue, me, name, month) {
		this.#id = id;
		this.#state = state;
		this.#hasOpenIssue = hasOpenIssue;
		this.#hasClosedIssue = hasClosedIssue;
		this.#me = me;
		this.#name = name;
		this.#month = month;
	}
	
	update(id, state, hasOpenIssue, hasClosedIssue, me, name, month) {
		this.#id = id;
		this.#state = state;
		this.#hasOpenIssue = hasOpenIssue;
		this.#hasClosedIssue = hasClosedIssue;
		this.#me = me;
		this.#name = name;
		this.#month = month;
	}
	
	getElement() {
		const inspecao = document.createElement('div');
		inspecao.id = `${this.#month}-${this.#name}`;
		inspecao.classList.add('inspecao');
		
		switch (this.#state) {
			case 1: inspecao.classList.add('esquecida'); break;
			case 2: inspecao.classList.add('agendada'); break;
			case 3: inspecao.classList.add('realizada'); break;
			default: break;
		}
		
		if (this.#me) inspecao.classList.add('para-mim');
		if (this.#hasOpenIssue || this.#hasClosedIssue) {
			const error = document.createElement('span')
			error.innerText = 'error';
			inspecao.appendChild(error);
		}
		if (this.#hasClosedIssue) inspecao.classList.add('com-apontamento','fechado');
		if (this.#hasOpenIssue) inspecao.classList.add('com-apontamento','aberto');
		
		return inspecao;
	}
}