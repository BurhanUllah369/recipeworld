let x = false

document.querySelector('.fa-bars').addEventListener('click', function() {
    document.querySelector('.open').classList.toggle('close')

    
})

const heartIcons = document.getElementsByClassName("fa-heart")
Array.from(heartIcons).forEach(function (icon) {
    icon.addEventListener("click", function () {
        icon.classList.toggle('red')
    })
    
});

const search = document.querySelector('.search-form')
document.querySelector('.search-opener').addEventListener('click', () => {
    search.style.top = '10px'
})

document.querySelector('.search-closer').addEventListener('click', () => {
    search.style.top = '-120px'
})

document.querySelector('.search-opener-big').addEventListener('click', () => {
    document.querySelector('.search-form-big').style.top = '10px'
})

document.querySelector('.search-closer-big').addEventListener('click', () => {
    document.querySelector('.search-form-big').style.top = '-120px'
})

// scroll animation 
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".feast-item, .rise-item, .hero, .news, .breakfast, .separate, .ever-item, .what-item, .pass-item");
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("feast-visible", "rise-visible", "hero-visible", "news-visible", "breakfast-visible", "separate-visible", "ever-visible", "what-visible", "pass-visible");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    items.forEach(item => observer.observe(item));
  });
  