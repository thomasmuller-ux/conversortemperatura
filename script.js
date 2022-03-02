function converterTemperatura(event){
    event.preventDefault()
    var valorTemperatura = window.document.getElementById('temperatura').value
    var valorOrigem = window.document.getElementById('origem').value
    var celsius
    var fahrenheit
    var kelvin
    var rankine

    
    // Celsius para F, K, R. 
    if(origem.value == '1'){
        fahrenheit = ((valorTemperatura * 1.8) + 32) 
        document.querySelector('#resultadofahrenheit').value=fahrenheit.toFixed(2) + '°F'
        kelvin = (valorTemperatura +++ 273.15)
        document.querySelector('#resultadokelvin').value=kelvin.toFixed(2) + 'K'
        rankine = ((valorTemperatura * 9/5) + 491.67)
        document.querySelector('#resultadorankine').value=rankine.toFixed(2) + '°R'
    }

    // Fahrenheit para C, K, R. 
    else if(origem.value == '2'){
        celsius = ((valorTemperatura - 32) / 1.8)
        document.querySelector('#resultadocelsius').value=celsius.toFixed(2) + '°C'
        kelvin = (((valorTemperatura - 32) * 5/9)+ 273.15)
        document.querySelector('#resultadokelvin').value=kelvin.toFixed(2) + ' K'
        rankine = (valorTemperatura +++ 459.67)
        document.querySelector('#resultadorankine').value=rankine.toFixed(2) + '°R'
    }

    // Kelvin para C, F, R. 
    else if(origem.value == '3'){
        celsius = (valorTemperatura - 273.15)
        document.querySelector('#resultadocelsius').value=celsius.toFixed(2) + '°C'
        fahrenheit = (((valorTemperatura - 273.15)* 1.8)+ 32)
        document.querySelector('#resultadofahrenheit').value=fahrenheit.toFixed(2) + '°F'
        rankine = (valorTemperatura * 1.8)
        document.querySelector('#resultadorankine').value=rankine.toFixed(2) + '°R'
    }

    // Rankine para C, F, K. 
    else if(origem.value == '4'){
        celsius = ((valorTemperatura - 491.67) * 5/9)
        document.querySelector('#resultadocelsius').value=celsius.toFixed(2) + '°C'
        fahrenheit = (valorTemperatura - 459.67)
        document.querySelector('#resultadofahrenheit').value=fahrenheit.toFixed(2) + '°F'
        kelvin = (valorTemperatura / 1.8)
        document.querySelector('#resultadokelvin').value=kelvin.toFixed(2) + 'K'


    }
}