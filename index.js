const m = prompt("Informe um valor em metros: ");

const resultadoNumerico = parseFloat(m);

const medida = prompt(
  "Qual medida obter? \n\nmilímetro (mm)\ncentímetro (cm) \ndecímetro (dm) \ndecâmetro(dam) \nhectômetro (hm) \nquilômetro (km)"
);

switch (resultadoNumerico) {
  case "milímetro (mm)":
    alert("O resultado é " + resultadoNumerico * 1000 + " milímetros");
    break;
  case "centímetro (cm)":
    alert("O resultado é " + resultadoNumerico * 100 + " centímetros");
    break;
  case "decímetro (dm)":
    alert("O resultado é " + resultadoNumerico * 10 + " decímetros");
    break;
  case "decâmetro (dam)":
    alert("O resultado é " + resultadoNumerico / 10 + " decâmetros");
    break;
  case "hectômetro (hm)":
    alert("O resultado é " + resultadoNumerico / 100 + " hectômetros");
    break;
  case "quilômetro (km)":
    alert("O resultado é " + resultadoNumerico / 1000 + " quilômetros");
    break;
  default:
    alert("Opção inválida");
}
