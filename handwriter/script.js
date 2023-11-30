let pointerdown = false;
document.body.addEventListener('pointerdown', () => { pointerdown = true; } );
document.body.addEventListener('pointerup', () => { pointerdown = false; } );

const tiles = document.getElementsByClassName('tile');

for (const tile of tiles) {
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