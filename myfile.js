// generate a random color (by random hex value)

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;              // here we are overwriting the intervalID manytimes
const startChangingcolor = () => {
    if(!intervalId){
    intervalId = setInterval(changebgcolor, 1000)}
    function changebgcolor() {
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingcolor = function() {
    clearInterval(intervalId)
    intervalId = null        // neccessary to flush the memory or dereferencing 
}
document.querySelector('#start').addEventListener('click', startChangingcolor)
document.querySelector('#stop').addEventListener('click', stopChangingcolor)