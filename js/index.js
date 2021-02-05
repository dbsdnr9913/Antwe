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



  // Q & A 내용 미입력시 알람 설정 

  const submits = document.querySelector('#submit');
  const textArea = document.querySelector('#subject');
  const Fname = document.querySelector('#Fname');
  const Lname = document.querySelector('#Lname');

  submits.addEventListener('click' , () => {
    if (textArea.value.trim() === '' || Fname.value.trim() === '' || Lname.value.trim() === '' ) {
      alert('내용을 입력 해주세요!');
    }
   
  })

})

// 좌측 슬라이드 글자 클릭시 해당 내용으로 이동 

let locationtable = document.querySelector('table').offsetTop;
let locationqna = document.querySelector('fieldset').offsetTop;
let locationCimg = document.querySelector('.container_img').offsetTop;


function scrollWindow0() {
  window.scrollTo({top: locationtable - 500 , behavior:'smooth'});
}

function scrollWindow1() {
  window.scrollTo({top:locationCimg , behavior:'smooth'});
}

function scrollWindow2() {
  window.scrollTo({top: locationqna + 1000 , behavior:'smooth'});
}
