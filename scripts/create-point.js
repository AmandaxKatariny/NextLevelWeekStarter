function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    const urlStates = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
    fetch(urlStates)
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome}</option>`
            }
            // states.forEach((value, index, array) => {
            //     let sigla_UF = value.nome
            //     let id_UF = value.id
            //      ufSelect.innerHTML += ufSelect.innerHTML + `<option value="${id_UF}"> ${sigla_UF}</option>`
            // })
        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]") // "select[name=city]" or "[name=city]"
    const stateInput = document.querySelector("input[name=state]")
    const ufvalue = event.target.value;
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const urlCities = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
    fetch(urlCities)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.id}"> ${city.nome}</option>`
            }
            ufvalue ? citySelect.removeAttribute('disabled') : citySelect.setAttribute('disabled', true)
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        console.log("change select UF")
    })