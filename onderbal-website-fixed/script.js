// Robust interactions for Önder Bal site
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if(navToggle && navList){
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu when a nav link is clicked (mobile)
    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if(navList.classList.contains('show')) navList.classList.remove('show');
      });
    });
  }

  const toTop = document.querySelector('.to-top');
  if(toTop){
    const toggleShow = () => toTop.style.display = window.scrollY > 600 ? 'block' : 'none';
    window.addEventListener('scroll', toggleShow);
    toggleShow();
    toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  // Set current year
  const yilEl = document.getElementById('yil');
  if(yilEl) yilEl.textContent = new Date().getFullYear();

  // Friendly console message for troubleshooting
  console.log('Önder Bal site: script çalıştı. Eğer görseller veya video görünmüyorsa README\'deki adımları takip edin.');

  // If video tag exists but no source (or missing file), show hint
  const video = document.querySelector('video');
  if(video){
    const source = video.querySelector('source');
    if(source && source.getAttribute('src')){
      // nothing
    } else {
      // show small overlay hint on video container
      const msg = document.createElement('div');
      msg.style.position = 'absolute';
      msg.style.left = '50%';
      msg.style.top = '50%';
      msg.style.transform = 'translate(-50%, -50%)';
      msg.style.padding = '8px 12px';
      msg.style.background = 'rgba(0,0,0,0.6)';
      msg.style.color = '#fff';
      msg.style.borderRadius = '6px';
      msg.style.fontSize = '14px';
      msg.textContent = 'Tanıtım video dosyası eksik. videos/tanitim.mp4 yükleyin.';
      const container = document.querySelector('.media.video');
      if(container) container.style.position = 'relative', container.appendChild(msg);
    }
  }

});
