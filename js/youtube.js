//youtube API 불러오는 부분
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    //width&height를 설정할 수 있으나, 따로 css영역으로 뺐다.
    videoId: 'sEOuJ4z5aTc',
    events: {
      'onReady': onPlayerReady,//로딩중에 이벤트 실행한다
      'onStateChange': onPlayerStateChange//플레이어 상태 변화 시 이벤트를 실행한다.
    }
  });
}

function onPlayerReady(event) {
 //로딩된 후에 실행될 동작을 작성한다(소리 크기,동영상 속도를 미리 지정하는 것등등...)
  event.target.playVideo();//자동재생
 
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
    //플레이어가 재생중일 때 작성한 동작이 실행된다.(원하는 시간만큼만 재생되고 멈추게 하는 것도 가능하다.)
  }
}

function loadVideo() {
    var player;
    window.YT.ready(function () {
      player = new window.YT.Player("player", {
        height: $('#playerFrame').height(),
        width: $('#playerFrame').width(),
        videoId: "luQwXvSR22g",
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    });
  
    function onPlayerReady(event) {
      event.target.playVideo();
      $('#clickPlay').hide();
    }
  
    function onPlayerStateChange(event) {
      var videoStatuses = Object.entries(window.YT.PlayerState)
      console.log(videoStatuses.find(status => status[1] === event.data)[0])
    }
  }
  
  function clickPlay() {
    $.getScript("https://www.youtube.com/iframe_api", function () {
      loadVideo();
    });
  }
  
  $('#playerFrame').click(function () {
    clickPlay()
  })