document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.transport-btn');
    const sections = document.querySelectorAll('.transport-section');

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var target = this.getAttribute('data-target');

            // Toggle active button
            buttons.forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');

            // Toggle section
            sections.forEach(function (s) { s.classList.remove('visible'); });
            var targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.classList.add('visible');
                // Scroll to section
                setTimeout(function () {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
});
