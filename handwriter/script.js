let pointerdown = false;
document.body.addEventListener('pointerdown', () => { pointerdown = true; } );
document.body.addEventListener('pointerup', () => { pointerdown = false; } );

const template = document.createElement('template');
template.innerHTML = `
	<style>
		.container {
			display: flex;
			gap: 10px;
		}
		
		.tiles {
			width: 518px;
			height: 518px;
			padding: 9px;
			display: grid;
			grid-template-columns: repeat(10, 1fr);
			grid-template-rows: repeat(10, 1fr);
			column-gap: 3px;
			row-gap: 3px;
			background-color: #4000EB;
			border-radius: 5px;
			touch-action: none;
		}

		.tile {
			background-color: white;
			border-radius: 2px;
		}

		.tile:hover {
			scale: 1.1;
			box-shadow: 1.5px 1.5px 3px #486aa7, -1.5px 1.5px 3px #486aa7, -1.5px -1.5px 3px #486aa7, 1.5px -1.5px 3px #486aa7;
		}
		
		.icon {
			height: 100%;
			width: 25px;
			padding: 7px;
			box-shadow: 1px 1px 5px mediumblue;
			border-radius: 3px;
		}
	</style>
	<div class="container">
		<div class="tiles" ondragstart="return false" ondrop="return false">
			<div id="00" class="tile"></div>
			<div id="01" class="tile"></div>
			<div id="02" class="tile"></div>
			<div id="03" class="tile"></div>
			<div id="04" class="tile"></div>
			<div id="05" class="tile"></div>
			<div id="06" class="tile"></div>
			<div id="07" class="tile"></div>
			<div id="08" class="tile"></div>
			<div id="09" class="tile"></div>
			<div id="10" class="tile"></div>
			<div id="11" class="tile"></div>
			<div id="12" class="tile"></div>
			<div id="13" class="tile"></div>
			<div id="14" class="tile"></div>
			<div id="15" class="tile"></div>
			<div id="16" class="tile"></div>
			<div id="17" class="tile"></div>
			<div id="18" class="tile"></div>
			<div id="19" class="tile"></div>
			<div id="20" class="tile"></div>
			<div id="21" class="tile"></div>
			<div id="22" class="tile"></div>
			<div id="23" class="tile"></div>
			<div id="24" class="tile"></div>
			<div id="25" class="tile"></div>
			<div id="26" class="tile"></div>
			<div id="27" class="tile"></div>
			<div id="28" class="tile"></div>
			<div id="29" class="tile"></div>
			<div id="30" class="tile"></div>
			<div id="31" class="tile"></div>
			<div id="32" class="tile"></div>
			<div id="33" class="tile"></div>
			<div id="34" class="tile"></div>
			<div id="35" class="tile"></div>
			<div id="36" class="tile"></div>
			<div id="37" class="tile"></div>
			<div id="38" class="tile"></div>
			<div id="39" class="tile"></div>
			<div id="40" class="tile"></div>
			<div id="41" class="tile"></div>
			<div id="42" class="tile"></div>
			<div id="43" class="tile"></div>
			<div id="44" class="tile"></div>
			<div id="45" class="tile"></div>
			<div id="46" class="tile"></div>
			<div id="47" class="tile"></div>
			<div id="48" class="tile"></div>
			<div id="49" class="tile"></div>
			<div id="50" class="tile"></div>
			<div id="51" class="tile"></div>
			<div id="52" class="tile"></div>
			<div id="53" class="tile"></div>
			<div id="54" class="tile"></div>
			<div id="55" class="tile"></div>
			<div id="56" class="tile"></div>
			<div id="57" class="tile"></div>
			<div id="58" class="tile"></div>
			<div id="59" class="tile"></div>
			<div id="60" class="tile"></div>
			<div id="61" class="tile"></div>
			<div id="62" class="tile"></div>
			<div id="63" class="tile"></div>
			<div id="64" class="tile"></div>
			<div id="65" class="tile"></div>
			<div id="66" class="tile"></div>
			<div id="67" class="tile"></div>
			<div id="68" class="tile"></div>
			<div id="69" class="tile"></div>
			<div id="70" class="tile"></div>
			<div id="71" class="tile"></div>
			<div id="72" class="tile"></div>
			<div id="73" class="tile"></div>
			<div id="74" class="tile"></div>
			<div id="75" class="tile"></div>
			<div id="76" class="tile"></div>
			<div id="77" class="tile"></div>
			<div id="78" class="tile"></div>
			<div id="79" class="tile"></div>
			<div id="80" class="tile"></div>
			<div id="81" class="tile"></div>
			<div id="82" class="tile"></div>
			<div id="83" class="tile"></div>
			<div id="84" class="tile"></div>
			<div id="85" class="tile"></div>
			<div id="86" class="tile"></div>
			<div id="87" class="tile"></div>
			<div id="88" class="tile"></div>
			<div id="89" class="tile"></div>
			<div id="90" class="tile"></div>
			<div id="91" class="tile"></div>
			<div id="92" class="tile"></div>
			<div id="93" class="tile"></div>
			<div id="94" class="tile"></div>
			<div id="95" class="tile"></div>
			<div id="96" class="tile"></div>
			<div id="97" class="tile"></div>
			<div id="98" class="tile"></div>
			<div id="99" class="tile"></div>
		</div>
		<svg class="icon" width="50" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M36.6002 44.2792C32.3413 46.8418 27.3537 47.922 22.4161 47.3512C17.4786 46.7804 12.869 44.5907 9.30711 41.124C5.7452 37.6573 3.43144 33.1088 2.72707 28.1885C2.0227 23.2683 2.96738 18.2533 5.41361 13.9265C7.85984 9.59968 11.6699 6.20468 16.249 4.27152C20.8281 2.33836 25.9184 1.97585 30.7252 3.24059C35.5321 4.50534 39.7848 7.32614 42.8195 11.2626C45.8542 15.1991 47.5 20.0296 47.5 25" stroke="#4000EB" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M45.0895 32.1072C45.4432 31.9553 45.8287 32.2432 45.7834 32.6254L44.5149 43.3338C44.4604 43.7935 43.8643 43.9387 43.6045 43.5556L40.5968 39.1195C40.5339 39.0267 40.4415 38.9577 40.3346 38.9236L35.2273 37.2987C34.7861 37.1583 34.7562 36.5455 35.1816 36.3628L45.0895 32.1072Z" fill="#4000EB" stroke="#4000EB"/>
		</svg>
	</div>
`;

class Handwriter extends HTMLElement {
	#tiles;
	#icon;
	
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
	}
	
	connectedCallback() {
		this.#tiles = this.shadowRoot.querySelectorAll('.tile');
		this.#icon = this.shadowRoot.querySelector('.icon');

		for (const tile of this.#tiles) {
			tile.addEventListener('pointerdown', () => {
				tile.style.backgroundColor = '#4000EB';
				tile.style.border = 'solid 1px white';
			});
			tile.addEventListener('pointerover', () => {
				if (pointerdown) {
					tile.style.backgroundColor = '#4000EB';
					tile.style.border = 'solid 1px white';
				}
			});
		}
		
		this.#icon.addEventListener('click', () => { this.#refresh(); })
	}
	
	#refresh() {
		for (const tile of this.#tiles) {
			tile.style.backgroundColor = 'white';
			tile.style.border = 'unset';
		}
	}
}

window.customElements.define('hand-writer', Handwriter);