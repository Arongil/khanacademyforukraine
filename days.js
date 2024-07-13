// Set day count ("For xxx days Ukraine has been at war, leaving ...")
function getDaysSinceWarStart() {
    const warStartDate = new Date('2022-02-24');
    const today = new Date();
    const diffTime = today - warStartDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}
document.getElementById('days-count').textContent = getDaysSinceWarStart() + " days";

