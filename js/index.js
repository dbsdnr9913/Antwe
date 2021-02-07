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

let locationtable = document.querySelector('table').offsetTop;
let locationqna = document.querySelector('fieldset').offsetTop;



function scrollWindow0() {
  window.scrollTo({top: locationtable - 500 , behavior:'smooth'});
}



function scrollWindow2() {
  window.scrollTo({top: locationqna + 1000 , behavior:'smooth'});
}
