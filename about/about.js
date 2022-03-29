const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('name');
const api = `https://restcountries.com/v3.1/name/${country}`
const darkModeBtn = document.getElementById('darkmode-button')
const overlay = document.querySelector('.overlay')
const countryInfoCont = document.querySelector('.country-info-container')


// async function sendReq(url) {
//     const req = await fetch(url)
//     const data = await req.json()
//     // overlay.classList.remove('hidden')
//     showContent(data)
// } 

fetch(api).then((country) => {
    showContent(country)
    return country.json()
}).then(aboutCountry)


function showContent(country) {
    // overlay.classList.add('hidden')
    // contryDetImg.src = `${country[0].flags.svg}`
    // countryPrimTitle.textContent = `${country[0].name.common}`
    // console.log(country);
    // document.querySelector('.off_name').textContent = country[0].name.common
}

function aboutCountry(country) {
    console.log(country);
    document.querySelector('.primary_title').textContent = `${country[0].name.common}`
    document.querySelector('.country-img').setAttribute('src', country[0].flags.svg)
    document.querySelector('.off_name').textContent = `${country[0].name.common}`
    document.querySelector('.population').textContent = `${country[0].population}`
    document.querySelector('.region').textContent = `${country[0].region}`
    document.querySelector('.subregion').textContent = `${country[0].subregion}`
    document.querySelector('.capital').textContent = `${country[0].capital}`
    document.querySelector('.week_start').textContent = `${country[0].startOfWeek}`
    document.querySelector('.currencies').textContent = `${country[0].currencies}`
    document.querySelector('.languages').textContent = `${country[0].languages[[0]]}`
    document.querySelector('.border_countries').textContent = `${country[0].border}`
}


// events
// overlay.addEventListener('click', ()=> {
//     overlay.classList.add('hidden')
//     overlay.textContent = `Loading...`
//     searchInput.value = ''
//     console.clear();
// })


// darkModeBtn.addEventListener('click', ()=> {
//     document.body.classList.toggle('dark')
// })
