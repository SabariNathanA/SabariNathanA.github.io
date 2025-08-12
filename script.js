window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content section');
    const navLinks = document.querySelectorAll('.main-nav a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    sections.forEach(section => {
        observer.observe(section);
    });
});
