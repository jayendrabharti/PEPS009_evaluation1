const textArea = document.getElementById("my-text");
const charCount = document.getElementById("char-count");
const clearBtn = document.getElementById("clear-btn");
const limit = 100;

document.addEventListener('DOMContentLoaded', () => {

    function setCount(count) {
        charCount.innerHTML = `${count} characters`;
        if (count <= limit) {
            charCount.style.color = "green";
        } else {
            charCount.style.color = "red";

        }
    }

    function clear() {
        setCount(0);
        textArea.value = "";
    }

    clearBtn.addEventListener('click', clear);

    textArea.addEventListener('input', (e) => {
        const count = e.target.value.length;
        setCount(count);
    })
});