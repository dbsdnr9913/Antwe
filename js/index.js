document.addEventListener('DOMContentLoaded', () => {



  // 상단 슬라이드 이벤트

  let slideIndex = 0;
  slideShow();


  function slideShow() {
    let i;
    let slides = document.querySelectorAll('.slideBar');
    
    slideIndex++;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 5000);
  }

  // login 내용 미입력시 알람 설정

  const log = document.querySelector('#login')
  const output = document.querySelectorAll('.output');
  const userName = document.querySelector('#userName');
  const password = document.querySelector('#password');
  const isEmail = (value) => {
    return (value.indexOf('@') > 1) && (value.split('@')[1].indexOf('.') > 1);
  }

  log.addEventListener('click' , () => {

    if (userName.value.trim() === '') {
      output[0].style.display = "inline";
      output[0].textContent = "아이디를 입력해주세요!"
      output[0].style.color = 'red';
    } else {
      output[0].style.display = "none";
    }
    


    if (password.value.trim() === '') {
      output[1].style.display = "inline";
      output[1].textContent = "비밀번호를 입력해주세요!"
      output[1].style.color = 'red';
    } else {
      output[1].style.display = 'none';
    }

  })
  
  

  userName.addEventListener('change', (e) => {
    const value = e.currentTarget.value;

    if (!isEmail(value)) {
      output[0].style.display = "inline";
      output[0].textContent = '이메일 형식이 아닙니다!'
      output[0].style.color = 'red';
    } else {
      output[0].style.display = "none"
    }

  })


  // Q & A 내용 미입력시 알람 설정 

  const submits = document.querySelector('#submit');
  
  submits.addEventListener('click' , () => {
    const textArea = document.querySelector('#subject');
    const Fname = document.querySelector('#Fname');
    const Lname = document.querySelector('#Lname');

    if (Fname.value.trim() === '') {
      output[2].style.display = "inline";
      output[2].textContent = "FIRST NAME을 입력해주세요!";
      output[2].style.color = "red";
    } else {
      output[2].style.display = 'none';
    }

    if (Lname.value.trim() === '') {
      output[3].style.display = "inline";
      output[3].textContent = "LAST NAME을 입력해주세요!";
      output[3].style.color = "red";
    } else {
      output[3].style.display = 'none';
    }

    if (textArea.value.trim() === '') {
      output[4].style.display = "inline";
      output[4].textContent = "Subject을 입력해주세요!";
      output[4].style.color = "red";
    } else {
      output[4].style.display = 'none';
    }
  })
}) 

// 좌측 슬라이드 글자 클릭시 해당 내용으로 이동 

let locationSearch = document.querySelector('.search_board').offsetTop;
let locationAbout = document.querySelector('.about_board').offsetTop;
let locationTable = document.querySelector('table').offsetHeight;
let locationQna = document.querySelector('fieldset').offsetHeight;

function scrollWindow0() {
  window.scrollBy({top: locationTable - 500, behavior:'smooth'});
}

function scrollWindow1() {
  window.scrollBy({top: locationQna - 300, behavior:'smooth'});
}

function scrollWindow2() {
  window.scrollBy({top: locationSearch + 1100 , behavior:'smooth'});
}

function scrollWindow3() {
  window.scrollBy({top: locationAbout + 2000 , behavior:'smooth'});
}





// 스크롤시 하단 검색 이미지 나타나는 이벤트

const search = document.querySelector('.search_board');

function displaySearch () {
  if (scrollY > 700) {
    search.style.display = "block";
    document.querySelector('.search_board').style.animate = "board";
  }
}

window.addEventListener('scroll', displaySearch);


// 하단 검색 이미지 엔터키 이벤트


const searchInput = document.querySelector('#search_input');

function enterKey() {
  if (window.event.keyCode == 13) {
    alert('테스트 중 입니다.');
  }
}


// 스크롤시 하단 자기소개 이미지 나타나는 이벤트

const about = document.querySelector('.about_board');

function displayAbout () {
  if (scrollY > 1900) {
    about.style.display = "block";
    document.querySelector('.about_board').style.animate = "board";
  }
}

window.addEventListener('scroll', displayAbout);