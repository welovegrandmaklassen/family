const images = [
  { src: 'images/image01.jpg', audio: 'audio/audio01.mp3' },
  { src: 'images/image02.jpg', audio: 'audio/audio02.mp3' },
  { src: 'images/image03.jpg', audio: 'audio/audio03.mp3' },
  { src: 'images/image04.jpg', audio: 'audio/audio04.mp3' },
  { src: 'images/image05.jpg', audio: 'audio/audio05.mp3' },
  { src: 'images/image06.jpg', audio: 'audio/audio06.mp3' },
  { src: 'images/image07.jpg', audio: 'audio/audio07.mp3' },
  { src: 'images/image08.jpg', audio: 'audio/audio08.mp3' },
  { src: 'images/image09.jpg', audio: 'audio/audio09.mp3' },
  { src: 'images/image10.jpg', audio: 'audio/audio10.mp3' },
  { src: 'images/image11.jpg', audio: 'audio/audio11.mp3' },
  { src: 'images/image12.jpg', audio: 'audio/audio12.mp3' },
  { src: 'images/image13.jpg', audio: 'audio/audio13.mp3' },
  { src: 'images/image14.jpg', audio: 'audio/audio14.mp3' },
  { src: 'images/image15.jpg', audio: 'audio/audio15.mp3' },
  { src: 'images/image16.jpg', audio: 'audio/audio16.mp3' },
  { src: 'images/image17.jpg', audio: 'audio/audio17.mp3' },
  { src: 'images/image18.jpg', audio: 'audio/audio18.mp3' },
  { src: 'images/image19.jpg', audio: 'audio/audio19.mp3' },
  { src: 'images/image20.jpg', audio: 'audio/audio20.mp3' },
  { src: 'images/image21.jpg', audio: 'audio/audio21.mp3' },
  { src: 'images/image22.jpg', audio: 'audio/audio22.mp3' },
  { src: 'images/image23.jpg', audio: 'audio/audio23.mp3' },
  { src: 'images/image24.jpg', audio: 'audio/audio24.mp3' },
  { src: 'images/image25.jpg', audio: 'audio/audio25.mp3' },
  { src: 'images/image26.jpg', audio: 'audio/audio26.mp3' },
  { src: 'images/image27.jpg', audio: 'audio/audio27.mp3' },
  { src: 'images/image28.jpg', audio: 'audio/audio28.mp3' },
  { src: 'images/image29.jpg', audio: 'audio/audio29.mp3' },
  { src: 'images/image30.jpg', audio: 'audio/audio30.mp3' },
  { src: 'images/image31.jpg', audio: 'audio/audio31.mp3' },
  { src: 'images/image32.jpg', audio: 'audio/audio32.mp3' }
  ];
  
  let currentIndex = 0;
  
  const imageElement = document.getElementById('image');
  const audioElement = new Audio();
  
  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlideshow();
  });
  
  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlideshow();
  });
  
  document.getElementById('play').addEventListener('click', () => {
    audioElement.src = images[currentIndex].audio;
    audioElement.play();
  });
  
  function updateSlideshow() {
    imageElement.src = images[currentIndex].src;
  }
  
  // Initialize the slideshow
  updateSlideshow();