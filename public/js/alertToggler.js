const alerta = document.getElementById("alerta");

export default function alertToggler(flag = true) {
  if (flag) {
    alerta.classList.remove("alert-visible");
    alerta.classList.add("alert-hidden");
  } else {
    alerta.classList.remove("alert-hidden");
    alerta.classList.add("alert-visible");
  }
}
