
const imagesArray = [
  './img/img1.png',
  './img/img2.png',
  './img/img3.png',
  './img/img4.png',
  './img/img5.png',
  './img/img6.png',
  './img/img7.png',
  './img/img8.png',
  './img/img9.png',
  './img/img10.png',
  './img/img11.png',
  './img/img12.png',
  './img/img13.png',
  './img/img14.png',
  './img/img15.png',
  './img/img16.png',
  './img/img17.png',
  './img/img18.png',
  './img/img19.png',
  './img/img20.png',
];


function displayImage() {
  const num = Math.floor(Math.random() * 20); // 0...20
  document.eightball.src = imagesArray[num];
};

