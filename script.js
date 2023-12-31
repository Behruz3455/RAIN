const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = '❄️❄️❄️❄️❄️';
const latin = '❄️❄️❄️❄️❄️';
const nums = '❄️❄️❄️❄️❄️';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}
const draw = () => {
  context.fillStyle = 'WHITE';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = 'BLUE';
  context.font = fontSize + 'px monospace';

  for(let i = 0; i < rainDrops.length; i++)
  {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i*fontSize, rainDrops[i]*fontSize);

      if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
          rainDrops[i] = 0;
      }
      rainDrops[i]++;
  }
};

setInterval(draw, 30);