const darkModeBtn = document.getElementById('darkmode-button')
const searchInput = document.querySelector('#search-input')
const countriesEl  = document.querySelector('.countries')
const selectReg = document.querySelector('#select')
const api = 'https://restcountries.com/v3.1/all'
const overlay = document.querySelector('.overlay')


overlay.addEventListener('click', ()=> {
    overlay.classList.add('hidden')
    overlay.textContent = `Loading...`
    searchInput.value = ''
    console.clear();
})

// asking data fro serve=r 
async function sendReq(url) {
    overlay.classList.remove('hidden')
    const req = await fetch(url)
    const data = await req.json()
    console.log(data);
    showContent(data)
}


const showContent = (countries)=> {
    overlay.classList.add('hidden')
    countries.forEach((country)=> {
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <a href="./about/about.html?name=${country.name.common}">
                <img src=${country.flags.png} alt="country flag"/>
                <h4 class="country-info country-name">${country.name.common}</h4>
                <p class="country-info country-population"><span class="bold-name">Population:</span> ${country.population}</p>
                <p class="country-info country-region"><span class="bold-name">Region:</span> ${country.region}</p>
                <p class="country-info country-capital"><span class="bold-name">Capital:</span> ${country.capital == undefined ? "No capital" : country.capital[0]}</p>
            </a>`

        countriesEl.appendChild(countryDiv)
    });
}
sendReq(api)
// events
darkModeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('dark')
})

selectReg.addEventListener('change', ()=> {
    const filterByRegion = selectReg.value.trim().toLowerCase()
    countriesEl.childNodes.forEach((country) => {
        if(filterByRegion == 'filter by region') {
            country.classList.remove('hidden')
        } else if(!country.querySelector('.country-region').textContent.toLowerCase().includes(filterByRegion)) {
            country.classList.add('hidden')
        } else {
            country.classList.remove('hidden')
        }
    })
})

searchInput.addEventListener('input', () => {
    const searchCountry = searchInput.value.trim().toLowerCase()

    countriesEl.childNodes.forEach((country) => {
        if(!country.querySelector('.country-name').textContent.toLowerCase().includes(searchCountry)) {
            country.classList.add('hidden')
        } else {
            country.classList.remove('hidden')
        }
    })
})