let count = 0;
let interval = setInterval(helper, 10)
let ms = document.getElementById('msTens')
function helper() {
    if (count === 10000){
    count++
    clearInterval(count)
    }
    ms.textContent = count;
}
helper()