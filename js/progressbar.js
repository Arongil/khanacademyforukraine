document.addEventListener('DOMContentLoaded', function() {
    var progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = '0%';
        requestAnimationFrame(function() {
            progressBar.style.width = '21.8%';
        });
    }
});

function getMatchedAmount() {
    let matchingTotal = 100000;
    let initialAmountRaised = 127000;
    let raised = document.getElementById("raised-amount").textContent;
    raised = raised.replace(/,/g, ''); // remove commas
    let matchingLeft = (initialAmountRaised + matchingTotal) - parseInt(raised);
    return parseInt(matchingLeft / 1000);
}

let progressNotice = "Double Your Impact: The Next $" + getMatchedAmount().toString() + "K You Give Is Matched (US Tax-Deductible)";

document.getElementById("progress-notice").textContent = progressNotice;
document.documentElement.style.setProperty("--progress-notice-content", "\"" + progressNotice + "\"");
