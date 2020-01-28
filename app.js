const TARGET_DATE = new Date('May 06 2019 10:00 AM GMT+6');

const hourElem = document.querySelector('#hours');
const minuteElem = document.querySelector('#minutes');
const secondElem = document.querySelector('#seconds');

function updateTime() {
  const now = new Date();
  let diff = Math.floor((TARGET_DATE - now) / 1000);

  const hr = Math.floor(diff / (60 * 60));
  diff -= hr * 60 * 60;
  const min = Math.floor(diff / 60);
  diff -= min * 60;
  const sec = Math.floor(diff);

  hourElem.innerHTML = hr;
  minuteElem.innerHTML = min;
  secondElem.innerHTML = sec;
}

setInterval(updateTime, 1000);

var pos = 1

var person1 = document.querySelector(".person-1")

var person2 = document.querySelector(".person-2")

var person3 = document.querySelector(".person-3")


setInterval(changeSlide, 3000)

function changeSlide(){
  if (pos === 1) {
    person1.style.left = '33%'
    person1.style.zIndex= '2'

    person2.style.left = '66%'
    person2.style.zIndex = '2'

    person3.style.left = '0%'
    person3.style.zIndex = '1'
  }
  if (pos === 2) {
    person1.style.left = '66%'
    person1.style.zIndex = '2'

    person2.style.left = '0%'
    person2.style.zIndex = '1'

    person3.style.left = '33%'
    person3.style.zIndex = '2'

  }
  if (pos === 3) {
    person1.style.left = '0%'
    person1.style.zIndex = '1'

    person2.style.left = '33%'
    person2.style.zIndex = '2'

    person3.style.left = '66%'
    person3.style.zIndex = '2'
  }
  if (pos < 3) {
    pos = pos + 1
  } else {
    pos = 1
  }
}
