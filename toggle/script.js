const modoVisualizacao = {
	peso: { num: -1, txt: 'Peso' },
	ambos: { num: 0, txt: 'Ambos' },
	quantidade: { num: 1, txt: 'Quantidade' },
	proximo: { num: -1, txt: 'Peso' }
}

const switchElem = document.querySelector('.toggle #switch');
const labelElem = document.querySelector('.toggle label');

switchElem.addEventListener('click', toggle);

function toggle() {
	const stateTxt = switchElem.getAttribute('state');
	const state = parseInt(stateTxt);
	
	switch(state) {
		case modoVisualizacao.peso.num:
			switchElem.setAttribute('state', modoVisualizacao.ambos.num);
			labelElem.textContent = modoVisualizacao.ambos.txt;
			modoVisualizacao.proximo = { 
				num: modoVisualizacao.quantidade.num,
				txt: modoVisualizacao.quantidade.txt
			}
			break;
		case modoVisualizacao.ambos.num:
			switchElem.setAttribute('state', modoVisualizacao.proximo.num);
			labelElem.textContent = modoVisualizacao.proximo.txt;
			break;
		case modoVisualizacao.quantidade.num:
			switchElem.setAttribute('state', modoVisualizacao.ambos.num);
			labelElem.textContent = modoVisualizacao.ambos.txt;
			modoVisualizacao.proximo = { 
				num: modoVisualizacao.peso.num,
				txt: modoVisualizacao.peso.txt
			}
			break;
			
	}
}