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

    citySelect.innerHTML = "<option value> Selecione a Cidade</option>"

    const urlCities = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`
    fetch(urlCities)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}"> ${city.nome}</option>`
            }
            ufvalue ? citySelect.removeAttribute('disabled', false) : citySelect.setAttribute('disabled', true)
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


//itens de cleta
// pegar todos li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    //add or remove class
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    // check if there are selected items, if yes get the selected items
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // this will be true or false
        return itemFound
    })

    if (alreadySelected >= 0) {
        // if already selected, remove from selection
        // selection strip
        const filteredItems = selectedItems.filter(item => {
            const itemDifferent = item != itemId
            return itemDifferent
        })

        selectedItems = filteredItems
    } else {
        //if not selected, add the selection
        //add to selection
        selectedItems.push(itemId)
    }

    // update the hidden field with the selected items
    collectItems.value = selectedItems
}