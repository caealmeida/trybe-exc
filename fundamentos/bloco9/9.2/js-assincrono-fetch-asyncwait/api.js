
const fetchCrypto = () => {

  const ul = document.getElementById('cryptoList');
  fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(data => {
        data.data.forEach((element) => {
            const li = document.createElement('li');
            li.innerHTML = `${element.name} (${element.symbol}): $${Number(element.priceUsd).toFixed(2)}`;
            ul.appendChild(li);
        });
    });
};

window.onload = () => fetchCrypto();
