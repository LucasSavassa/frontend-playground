const canvas = document.getElementsByTagName('canvas').item(0);
const context = canvas ? canvas.getContext('2d') : console.log('Unable to get context due to canvas not found');