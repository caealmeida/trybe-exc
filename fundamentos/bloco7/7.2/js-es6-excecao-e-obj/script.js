function verifyNumber(n1, n2){
    if(!n1 || !n2){
        throw new Error('Todos campos devem ser preenchidos.')
    }

    if(isNaN(n1) || isNaN(n2)){
        throw new Error('Valores devem ser numéricos.')
    }
}

function sum() {
    try{
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        verifyNumber(value1, value2);
        const result = parseInt(value1) + parseInt(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
    }
    catch (error) {
        document.getElementById('result').innerHTML = error.message;
    }
    finally{
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
  }

  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }