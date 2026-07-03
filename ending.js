window.onerror = function(msg){

alert(msg);

}

// ==========================
// MUSIC
// ==========================

const music = document.getElementById("music");

// Browser modern biasanya membutuhkan interaksi pengguna
document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

// ==========================
// TYPING EFFECT
// ==========================

const text = `Halooo My Cyaaa...

Terima kasih...

karena sudah meluangkan waktu...

untuk membaca semuanya.

Aku tidak tahu...

bagaimana keadaanmu sekarang.

Yang aku harapkan hanya satu...

Semoga kamu selalu sehat.

Semoga kamu selalu tersenyum.

Semoga semua yang sedang kamu perjuangkan...

berjalan dengan baik.

Dan...

kalaupun suatu hari nanti...

kita tidak lagi berada

di jalan yang sama...

Aku tetap akan mendoakan

yang terbaik untukmu.

Terima kasih...

karena pernah menjadi

bagian dari cerita hidupku.

❤️`;

const typing = document.getElementById("typing");
const nextBtn = document.getElementById("nextBtn");

let i = 0;

const timer = setInterval(() => {

    typing.textContent += text.charAt(i);

    i++;

    if(i >= text.length){

        clearInterval(timer);

        nextBtn.style.display = "inline-block";

    }

},45);

// ==========================
// BUTTON
// ==========================

nextBtn.onclick=function(){

document.getElementById("black").classList.add("show");

}

// ==========================
// REPLAY
// ==========================

function ulang(){

window.location="index.html";

}

// ==========================
// STARS
// ==========================

for(let i=0;i<180;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*3+"s";

star.style.animationDuration=(2+Math.random()*3)+"s";

document.body.appendChild(star);

}

// ==========================
// SAKURA
// ==========================

for(let i=0;i<35;i++){

const sakura=document.createElement("div");

sakura.className="sakura";

sakura.innerHTML="🌸";

sakura.style.left=Math.random()*100+"%";

sakura.style.animationDuration=(6+Math.random()*6)+"s";

sakura.style.animationDelay=Math.random()*5+"s";

document.body.appendChild(sakura);

}