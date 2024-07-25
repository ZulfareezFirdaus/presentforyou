const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');
    
    setTimeout(() => {
      window.location.href = 'present/foryou/index.html'; // replace with your target URL
    }, 8000); // 10 seconds
});

