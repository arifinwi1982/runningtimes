var time_remaining = 10.00;

function run() {
    time_remaining -= 0.01;
    document.getElementById("time_seconds").textContent = time_remaining.toFixed(2);
}

var id = setInterval('run()', 10);

setTimeout('clearInterval(id);', 10002);