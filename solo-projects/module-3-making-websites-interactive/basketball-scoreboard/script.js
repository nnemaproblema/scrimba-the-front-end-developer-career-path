function addHome(e) {
    let homeScore = parseInt(homeScoreboard.textContent);
    let point = parseInt(e.target.textContent[1]);

    homeScoreboard.textContent = homeScore + point;
}

function addGuest(e) {
    let guestScore = parseInt(guestScoreboard.textContent);
    let point = parseInt(e.target.textContent[1]);

    guestScoreboard.textContent = guestScore + point;
}

function restart(e) {
    homeScoreboard.textContent = 0;
    guestScoreboard.textContent = 0;
}

function leader() {
    let homeScore = parseInt(homeScoreboard.textContent);
    let guestScore = parseInt(guestScoreboard.textContent);

    if (homeScore > guestScore) {
        homeScoreboard.classList.add("leader");
        guestScoreboard.classList.remove("leader");
    } else if (guestScore > homeScore) {
        guestScoreboard.classList.add("leader");
        homeScoreboard.classList.remove("leader");
    } else {
        homeScoreboard.classList.remove("leader");
        guestScoreboard.classList.remove("leader");
    }
}

const homeScoreboard = document.querySelector("#home-scoreboard");
const guestScoreboard = document.querySelector("#guest-scoreboard");


const homePoints = document.querySelectorAll("#home-points .point");
const guestPoints = document.querySelectorAll("#guest-points .point");

homePoints.forEach(point => point.addEventListener("click", addHome));
guestPoints.forEach(point => point.addEventListener("click", addGuest));


const newGameBtn = document.querySelector("#new-game");

newGameBtn.addEventListener("click", restart);


const points = document.querySelectorAll(".point");

points.forEach(point => point.addEventListener("click", leader));

newGameBtn.addEventListener("click", leader);
