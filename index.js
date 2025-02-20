
document.addEventListener('DOMContentLoaded', function () {
    const headings = document.querySelectorAll('.content h1, .content h2');

    headings.forEach(function (heading) {
        heading.addEventListener('animationend', function (e) {
            if (e.animationName === 'fadeIn') {
                heading.style.pointerEvents = 'auto';
            }
        });
    });
});