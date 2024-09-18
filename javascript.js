let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Typewriter effect for heading
const text = document.getElementById("heading");
const textContent = text.innerHTML;
text.innerHTML = "";

let index = 0;
function typeWriter() {
    if (index < textContent.length) {
        text.innerHTML += textContent.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;
