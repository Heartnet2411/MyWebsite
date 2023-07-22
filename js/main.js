let load = document.getElementById('load');

window.onload = function() {
    setTimeout(() => {
        load.remove();
    }, 4000);   
}