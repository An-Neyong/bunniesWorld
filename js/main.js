const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
})
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '뉴진스에 대해 검색해봐 !');
})
searchInputEl.addEventListener('blur',function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');

});
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 2000){
        gsap.to(badgeEl, .6, { 
            opacity: 0,
            display: 'none'
        });

    }else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

const badgeEl2 = document.querySelector('header .badges2');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 2000){
        gsap.to(badgeEl2, .6, { 
            opacity: 0,
            display: 'none'
        });

    }else {
        gsap.to(badgeEl2, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) { 
    gsap.to(fadeEl, 1, {
        delay: (index + 1)  * .7,
        opacity: 1
    });
});
//Swiper 
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});
new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 2500 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    },
   
  });

//   오디오 플레이어
