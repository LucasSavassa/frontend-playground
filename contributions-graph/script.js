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
		this.#name = name.toLowerCase().trim();
		this.#month = month.toLowerCase().trim();
	}
	
	update(id, state, hasOpenIssue, hasClosedIssue, me, name, month) {
		this.#id = id;
		this.#state = state;
		this.#hasOpenIssue = hasOpenIssue;
		this.#hasClosedIssue = hasClosedIssue;
		this.#me = me;
		this.#name = name.toLowerCase().trim();
		this.#month = month.toLowerCase().trim();
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

class AgendaIndividual {
	#jan;
	#fev;
	#mar;
	#abr;
	#mai;
	#jun;
	#jul;
	#ago;
	#set;
	#out;
	#nov;
	#dez;
	#name;
	#me;
	
	constructor(name, me) {
		this.#name = name;
		this.#me = me;
	}
	
	updateMonth(month, inspecao) {
		switch(month) {
			case 'jan': this.#jan = inspecao; break;
			case 'fev': this.#fev = inspecao; break;
			case 'mar': this.#mar = inspecao; break;
			case 'abr': this.#abr = inspecao; break;
			case 'mai': this.#mai = inspecao; break;
			case 'jun': this.#jun = inspecao; break;
			case 'jul': this.#jul = inspecao; break;
			case 'ago': this.#ago = inspecao; break;
			case 'set': this.#set = inspecao; break;
			case 'out': this.#out = inspecao; break;
			case 'nov': this.#nov = inspecao; break;
			case 'dez': this.#dez = inspecao; break;
			default: break;
		}
	}
	
	
	
	getElement() {
		const row = document.createElement('td');
		row.id = name.toLowerCase().trim();
		row.classList.add('row-header');
		if (this.#me) row.classList.add('eu');		
		row.innerText = name;
		
		row.appendChild(this.#jan.getElement());
		row.appendChild(this.#fev.getElement());
		row.appendChild(this.#mar.getElement());
		row.appendChild(this.#abr.getElement());
		row.appendChild(this.#mai.getElement());
		row.appendChild(this.#jun.getElement());
		row.appendChild(this.#jul.getElement());
		row.appendChild(this.#ago.getElement());
		row.appendChild(this.#set.getElement());
		row.appendChild(this.#out.getElement());
		row.appendChild(this.#nov.getElement());
		row.appendChild(this.#dez.getElement());
		
		return row;
	}
}