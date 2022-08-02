
const titles = 'Nanaimo BC Canada'
let words
let simplePictures
let cityPictures

let clickCount = 0

function preload() {

  cityPictures = [
    loadImage('assets/bg1.jpg'),
    loadImage('assets/bg2.jpeg'),
    loadImage('assets/bg3.jpeg')
  ]
  simplePictures = [
  ]
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1)
  textAlign(CENTER, CENTER)

  words = [
    { word: 'Island', x: 100, y: 50 },
    { word: 'Harbour', x: width - 100, y: height - 100 },
    { word: 'Fish and chips', x: 200, y: 150 },
    { word: 'Dover Bay', x: 100, y: 290 },
    { word: 'secondary school', x: 170, y: 450 },
    { word: 'BC Ferry', x: 500, y: 550 },
  ]
}

function draw() {
  background(255)
  if (clickCount == 0) {
    textSize(38)
    text(titles, width / 2, height / 2)
  } else if (clickCount == 1) {
    textSize(30)
    for (let i = 0; i < words.length; i++) {
      text(words[i].word, words[i].x, words[i].y)
    }

    for (let i = 0; i < simplePictures.length; i++) {
      let { x, y, w, h } = simplePictures[i]
      image(simplePictures[i].url, x, y, w, h)
    }
  } else if (clickCount == 2) {
    push()
    imageMode(CENTER)
    let h = width
    image(cityPictures[0], width / 2, height / 2, width, h)
    pop()
  } else if (clickCount == 3) {
    push()
    imageMode(CENTER)
    let h = width / 1.7
    image(cityPictures[1], width / 2, height / 2, width, h)
    pop()
  } else if (clickCount == 4) {
    push()
    imageMode(CENTER)
    let h = width / 1.78
    image(cityPictures[2], width / 2, height / 2, width, h)
    pop()
  }
}

function mouseClicked() {
  if (++clickCount == 5) {
    clickCount = 0
  }
}