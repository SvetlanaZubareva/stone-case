const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        debugger
        if (entry.isIntersecting) {
          entry.target.classList.add('section-stages_list-item1');
        }
      });
  });

  observer.observe(document.querySelector('.section-order_list-item'));

  export { observer }
