const btn = document.getElementById("btn");
const resetBtn = document.getElementById("reset-btn");
const countSpan = document.getElementById("count-span");

document.addEventListener('DOMContentLoaded', () => {

    function count() {
        let count = 0;
        let shouldCount = true;
        return function (newCount = null) {
            if (newCount != null) {
                count = newCount;
                countSpan.innerHTML = count;
                return;
            }
            else if (!shouldCount) return;
            countSpan.innerHTML = ++count;
            shouldCount = false;
            setTimeout(() => {
                shouldCount = true;
            }, 1000);
        }
    }

    const countHandler = count();

    btn.addEventListener('click', () => { countHandler() });

    resetBtn.addEventListener('click', () => {
        countHandler(0);
    });

});