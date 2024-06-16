const data = new Date();

const renderizaCalendario = () => {
	data.setDate(1);

	const diasMeses = document.querySelector(".dias");

	const mes = data.getMonth();

	const ultimoDiaMesAtual = new Date(data.getFullYear(),
		data.getMonth() + 1, 0).getDate();

	const ultimoDiaMesAnterior = new Date(data.getFullYear(),
		data.getMonth(), 0).getDate();

	//console.log(ultimoDiaMesAnterior);

	const primeiroDiaIndice = parseInt(data.getDay());

	//console.log(ultimoDiaMesAtual);

	const ultimoDiaIndice = new Date(data.getFullYear(),
		data.getMonth() + 1, 0).getDay();

	const proximosDias = 7 - ultimoDiaIndice - 1;

	const listaMeses = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro"
	];

	document.querySelector(".data h1").innerHTML = listaMeses[mes];

	document.querySelector(".data p").innerHTML = new Date().toDateString();

	let listaDias = "";

	for (let index = primeiroDiaIndice; index > 0; index--) {
		listaDias = listaDias + `<div class="data-anterior">${ultimoDiaMesAnterior - index + 1}</div>`;
	}

	for (let index = 1; index <= parseInt(ultimoDiaMesAtual); index++) {
		if (index === new Date().getDate() && data.getMonth() === new Date().getMonth()) {
			listaDias = listaDias + `<div class="hoje">${index}</div>`;
		} else {
			listaDias = listaDias + `<div>${index}</div>`;
		}
	}

	for (let index = 1; index <= proximosDias; index++) {
		listaDias = listaDias + `<div class="proxima-data">${index}</div>`;
		diasMeses.innerHTML = listaDias;
	}
};

document.querySelector(".prev").addEventListener("click", () => {
	data.setMonth(data.getMonth() - 1);
	renderizaCalendario();
});

document.querySelector(".next").addEventListener("click", () => {
	data.setMonth(data.getMonth() + 1);
	renderizaCalendario();
});

renderizaCalendario();

/*switch (mes) {
    case 0:
        console.log("Janeiro");
        break;
    case 1:
        console.log("Fevereiro");
        break;
    case 2:
        console.log("Março");
        break;
    case 3:
        console.log("Abril");
        break;
    case 4:
        console.log("Maio");
        break;
    case 5:
        console.log("Junho");
        break;
    case 6:
        console.log("Julho");
        break;
    case 7:
        console.log("Agosto");
        break;
    case 8:
        console.log("Setembro");
        break;
    case 9:
        console.log("Outubro");
        break;
    case 10:
        console.log("Novembro");
        break;
    case 11:
        console.log("Dezembro");
        break;

    default:
        break;
}*/