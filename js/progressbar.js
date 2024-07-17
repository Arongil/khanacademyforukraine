document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '0%';
        requestAnimationFrame(function() {
            progressBar.style.width = '21.7%';
        });
    }
});

