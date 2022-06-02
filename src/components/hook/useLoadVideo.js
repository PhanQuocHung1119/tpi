import { useEffect } from 'react';

const useLoadVideo = () => {
  /* load API youtube and vimeo */
  useEffect(() => {
    if (window.YT && window.Vimeo) return;
    let youtubeTag = document.createElement('script');
    let vimeoTag = document.createElement('script');
    youtubeTag.src = 'https://www.youtube.com/iframe_api';
    vimeoTag.src = 'https://player.vimeo.com/api/player.js';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(youtubeTag, firstScriptTag);
    firstScriptTag.parentNode.insertBefore(vimeoTag, firstScriptTag);
  }, []);
};

const arrVimeoVideo = [];
const arrIframe = [];

const stopAnotherVideo = (iframeElmnt = {}, vimeoID = '') => {
  var iframes = document.querySelectorAll('iframe');
  [...iframes].forEach((iframe) => {
    if (iframe.id.includes('youtube')) {
      if (iframe.id !== iframeElmnt.id) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func: 'stopVideo' }),
          '*'
        );
      }
    }
  });

  if (vimeoID == '')
    for (const item of arrVimeoVideo) {
      item.vimeoPlayer.unload();
    }
};

function loadYoutubeVideo(
  iframeElmnt,
  youtubeID,
  bannerImage,
  bannerInfo,
  styles,
  sliderRef
) {
  if (!window.YT) return;
  window.YT.ready(function () {
    new window.YT.Player(iframeElmnt.id, {
      width: iframeElmnt.width,
      height: iframeElmnt.height,
      videoId: youtubeID,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  });
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  function onPlayerStateChange(event) {
    /* event.data = 1  =>  Playing */
    event.data == '1' &&
      sliderRef?.slickPause() &&
      stopAnotherVideo(iframeElmnt);
    /* event.data = -1  =>  Unstarted  */
    /* event.data = 0  =>  video Ended   */
    /* event.data = 2  =>  Paused  */
    /* event.data = 5  =>  video Cued  */
    if (event.data == 2 || event.data == 5 || event.data == 0) {
      sliderRef?.slickPlay();
      bannerInfo?.classList.remove(styles['active']);
      iframeElmnt.replaceWith(bannerImage);
    }
  }
}

function loadVimeoVideo(
  iframeElmnt,
  vimeoID,
  bannerImage,
  bannerInfo,
  styles,
  sliderRef
) {
  if (!window.Vimeo) return;
  let options = {
    width: iframeElmnt.width,
    height: iframeElmnt.height,
    id: vimeoID,
    responsive: true,
  };

  let vimeoPlayer;
  vimeoPlayer = new Vimeo.Player(iframeElmnt.id, options);

  vimeoPlayer.on('play', function () {
    sliderRef?.slickPause();
    stopAnotherVideo(iframeElmnt, vimeoID);
  });

  vimeoPlayer.on('pause', function (event) {
    if (event.seconds > 0) {
      sliderRef?.slickPlay();
      bannerInfo?.classList.remove(styles['active']);
      iframeElmnt?.replaceWith(bannerImage);
    }
  });
  vimeoPlayer.on('ended', function () {
    sliderRef?.slickPlay();
    bannerInfo?.classList.remove(styles['active']);
    iframeElmnt?.replaceWith(bannerImage);
  });

  if (arrVimeoVideo.length > 0)
    arrVimeoVideo.forEach((item) => {
      if (item.vimeoID === vimeoID) {
        return;
      }
    });

  arrVimeoVideo.push({ vimeoPlayer: vimeoPlayer, vimeoID: vimeoID });
}

const loadVideo = (
  youtubeID,
  vimeoID,
  iframeElmnt,
  bannerImage,
  bannerInfo,
  styles,
  sliderRef
) => {
  if (typeof youtubeID != 'undefined') {
    loadYoutubeVideo(
      iframeElmnt,
      youtubeID,
      bannerImage,
      bannerInfo,
      styles,
      sliderRef
    );
  } else if (typeof vimeoID != 'undefined') {
    loadVimeoVideo(
      iframeElmnt,
      vimeoID,
      bannerImage,
      bannerInfo,
      styles,
      sliderRef
    );
  }
};

const createIframe = (
  e,
  index = 0,
  urlVideo = '',
  bannerInfo,
  styles,
  sliderRef
) => {
  if (urlVideo == '') return;
  bannerInfo?.classList.add(styles['active']);

  let youtubeID;
  let vimeoID;
  if (/vimeo.com\/video/g.test(urlVideo)) {
    vimeoID = urlVideo.split('vimeo.com/video/')[1].split('?')[0];
  } else if (/vimeo.com\//g.test(urlVideo)) {
    vimeoID = urlVideo.split('vimeo.com/')[1].split('?')[0];
  } else if (/youtube.com\/embed\//g.test(urlVideo)) {
    youtubeID = urlVideo.split('youtube.com/embed/')[1].split('?')[0];
  } else if (/youtube.com\/watch\?v=/g.test(urlVideo)) {
    youtubeID = urlVideo.split('youtube.com/watch?v=')[1].split('?')[0];
  } else if (/youtu.be\//g.test(urlVideo)) {
    youtubeID = urlVideo.split('youtu.be/')[1].split('?')[0];
  }

  let bannerImage = e.currentTarget;
  let existIframe = false;

  if (arrIframe.length > 0) {
    for (const item of arrIframe) {
      if (item.bannerImage.id === bannerImage.id) {
        existIframe = true;
        break;
      }
    }
  }

  let iframeElmnt = document.createElement('iframe');

  iframeElmnt.height = bannerImage.clientHeight;
  iframeElmnt.width = bannerImage.clientWidth;
  iframeElmnt.allow = 'autoplay';
  iframeElmnt.id = `${youtubeID ? `youtube` : `vimeo`}-${index}`;

  iframeElmnt.setAttribute('frameborder', 0);
  iframeElmnt.src = youtubeID
    ? `https://www.youtube.com/embed/${youtubeID}?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&enablejsapi=1&disablekb=1`
    : `https://player.vimeo.com/video/${vimeoID}?autoplay=1&autopause=1&transparent=0&controls=1`;
  bannerImage.replaceWith(iframeElmnt);

  if (!existIframe) {
    arrIframe.push({
      iframeElmnt: iframeElmnt,
      bannerImage: bannerImage,
    });
  }

  loadVideo(
    youtubeID,
    vimeoID,
    iframeElmnt,
    bannerImage,
    bannerInfo,
    styles,
    sliderRef
  );
};

const activeImage = (e, index = 0, urlVideo, bannerInfo, styles, sliderRef) => {
  if (urlVideo) {
    let threshold = 3;
    let distance = 0;

    const onMouseMove = () => {
      distance++;
    };
    const onMouseUp = (event) => {
      if (distance <= threshold)
        createIframe(event, index, urlVideo, bannerInfo, styles, sliderRef);
    };
    e.currentTarget.addEventListener('mousemove', onMouseMove);
    e.currentTarget.addEventListener('mouseup', onMouseUp, { once: true });
  }
};

export { useLoadVideo, createIframe, activeImage, stopAnotherVideo };
