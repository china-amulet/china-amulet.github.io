var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let settings = {
  picVar: [],
  charmNum: 5,
  bgColor: 'black',
  txtColor: 'black',
}

function config(settings) {

  let s_ettings = {
    picVar: [],
    charmNum: 5,
    bgColor: 'black',
    txtColor: 'black',
  }

  if (document.querySelector('#xijinping').checked) {
    s_ettings.picVar.push('xijinping')
  }

  if (document.querySelector('#daughter').checked) {
    s_ettings.picVar.push('daughter')
  }

  if (document.querySelector('#tankman').checked) {
    s_ettings.picVar.push('tankman')
  }

  s_ettings.charmNum = Number(document.querySelector('#charmRange').value)

  s_ettings.bgColor = document.querySelector('#bgColor').value
  s_ettings.txtColor = document.querySelector('#txtColor').value

  return s_ettings

}

function draw(config) {

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  let bgColor = config.bgColor;
  let txtColor = config.txtColor
  let picVar = config.picVar;
  let charmNum = config.charmNum;


  //배경
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);


  // 워터마크
  ctx.fillStyle = txtColor;
  ctx.textAlign = "center";
  ctx.font = 'italic 11px sans-serif';
  ctx.fillText('짱깨부적 생성기 | https://china-amulet.github.io', 377, 15);



  //부적문구
  const charms = getCharm(charmNum);
  ctx.textAlign = "left";
  ctx.font = '17px Microsoft YaHei';

  let txtY = 691;
  for (const i in charms) {
    txtY -= 17;
  }
  for (const i in charms) {
    ctx.fillText(charms[i], 0, txtY);
    txtY += 17;
  }

  //좆진핑

  if (config.picVar.includes('xijinping')) {
    var img = new Image();
    img.src = "좆진핑.png";
    img.onload = function () {
      ctx.drawImage(img, 15, 37, 177, 199)
    }
    ctx.fillStyle = txtColor;
    ctx.textAlign = "left";
    ctx.font = '23px Microsoft YaHei';

    var x = 199;
    var y = 25;
    var lineheight = 27;
    var lines = xijinpingTXT.split('\n');
    for (var i = 0; i < lines.length; i++)
      ctx.fillText(lines[i], x, y + (i * lineheight));
  }

  if (config.picVar.includes('daughter')) {
    var img1 = new Image();
    img1.src = "시진핑딸.png";
    img1.onload = function () {
      ctx.drawImage(img1, 15, 255, 177, 199)
    }
    ctx.fillStyle = txtColor;
    ctx.textAlign = "left";
    ctx.font = '23px Microsoft YaHei';

    var x = 199;
    var y = 245;
    var lineheight = 27;
    var lines = daughterTXT.split('\n');

    for (var i = 0; i < lines.length; i++)
      ctx.fillText(lines[i], x, y + (i * lineheight));
  }

  // if (settings.picVar.includes('daughter')) {
  //   var img = new Image();
  //   img.src = "좆진핑.png";
  //   img.onload = function () {
  //     ctx.drawImage(img, 144, 20, 177, 199)
  //   }
  // }

  // if (settings.picVar.includes('tankman')) {
  //   var img = new Image();
  //   img.src = "좆진핑.png";
  //   img.onload = function () {
  //     ctx.drawImage(img, 144, 20, 177, 199)
  //   }
  // }

  //야갤로고

  //노짱

  setTimeout(function() {
    image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var link = document.getElementById('down');
    link.download = "my-image.png";
    link.href = image;
  }, 444);



}

function randGen() {
  let _settings = {
    picVar: ['xijinping', 'daughter'],
    charmNum: 5,
    bgColor: 'black',
    txtColor: 'black',
  }

  const rand_picVar = ['xijinping', 'daughter', 'tankman']
  const rand_color = ['black', 'white', 'red', 'blue']

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
  }

  _settings.bgColor = rand_color[Math.floor(Math.random() * rand_color.length)];
  _settings.txtColor = rand_color[Math.floor(Math.random() * rand_color.length)];
  _settings.charmNum = getRandomInt(5, 10);

  if (_settings.bgColor === _settings.txtColor) {
    _settings.bgColor = 'black'
    _settings.txtColor = 'red'
  }

  draw(_settings)

  console.log(_settings);

}

function getCharm(num) {
  const shuffled = charm.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

console.log(settings);

draw(config(settings))
