// prevent sticky nav from overlapping content
// when using internal links
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
