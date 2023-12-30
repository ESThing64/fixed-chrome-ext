// const amount = document.getElementById('amount');
const amountEl = document.getElementById('amount');
//const currency = document.getElementById ('currency');
const currencyEl = document.getElementById ('currency');
const convertBtn = document.getElementById ('convert');
// const convert = document.getElementById ('convert')
const resultEl = document.getElementById('result');
const API_KEY="tD1ldLynjdwoiDUC1QpmIg==p9GMxT7dC8BpmK2B"

convert.addEventListener('click', getData)

function getData(){
    //const apiUrl='https://api.api-ninjas.com/v1/exchangerate?pair=USD_'
    //const url = apiUrl + currencyTotal;

    const amountTotal = amountEl.value;
    // const currencyTotal = currency.value;
    const selectedCurrency = currencyEl.value
    const url = `https://api.api-ninjas.com/v1/exchangerate?pair=${selectedCurrency}_USD`

    

    fetch(url, {
        headers: {
            'X-API-KEY': API_KEY
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        //const rate = data.rate;
        const exchangeRate = data.exchange_rate


        //const conversionRate = amountTotal * rate;
        const convertedRate = amountTotal * exchangeRate;

        console.log(data)

        //resultEl.innerHTML = `${amount} ${currency} = ${conversionRate.toFixed(2)} USD`;
        resultEl.innerHTML = `${amount.value} ${currency.value} = ${convertedRate.toFixed(2)} USD`;
    })
    .catch(error => {
        console.error ('Request failed:', error);
        result.innerHTML = 'An error occurred please try again later.'
        })
}