var reps = document.getElementById("reps");
var feedback = document.getElementById("feedback");
var btn = document.getElementById("start");

var total_reps = 10;
var reps_completed = 0;

const motivation = [
  "Empezamos",
  "Buen comienzo",
  "Sigue así",
  "Baja un poco más",
  "Mucho mejor",
  "Ya llevas la mitad",
  "Que no decaiga el ánimo",
  "Con más ganas, que se note el esfuerzo",
  "Venga que puedes",
  "Vamos a por la última",
  "¡Ya lo tienes!",
];

function start() {
  setInterval(function () {
    if (total_reps == -1) return;
    else {
      reps.innerHTML = total_reps;
      total_reps--;
      feedback.innerHTML = motivation[reps_completed];
      reps_completed++;
    }
  }, 2000);
}

btn.addEventListener("click",start);
