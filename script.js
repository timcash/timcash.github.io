document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.snap-section');
  const options = {
      root: null,
      threshold: 0,
      rootMargin: "0px"
  };

  const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const section = entry.target;
              const backgroundDiv = section.querySelector('.background');

              if (section.dataset.video) {
                  const video = document.createElement('video');
                  video.src = section.dataset.video;
                  video.setAttribute('autoplay', '');
                  video.setAttribute('loop', '');
                  video.setAttribute('muted', '');
                  video.setAttribute('playsinline', '');
                  backgroundDiv.appendChild(video);
              } else if (section.dataset.bg) {
                  const img = document.createElement('img');
                  img.src = section.dataset.bg;
                  backgroundDiv.appendChild(img);
              }

              loadJavaScriptForSection(section.id);
              observer.unobserve(entry.target);
          }
      });
  }, options);

  sections.forEach(section => {
      sectionObserver.observe(section);
  });

  function loadJavaScriptForSection(sectionId) {
      console.log(`Loading JavaScript for ${sectionId}`);
      // Dynamic JavaScript loading code
  }
});
