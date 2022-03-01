function converterTemperatura(){
    var valorTemperatura = window.document.getElementById('temperatura').value
    var valorOrigem = window.document.getElementById('origem').value
    var celsius
    var fahrenheit
    var kelvin
    var rankine

    
    // Celsius para F, K, R. 
    if(origem.value == '1'){
        fahrenheit = ((valorTemperatura * 1.8) + 32)
        document.querySelector('#resultadofahrenheit').value=fahrenheit.toFixed(2)
        kelvin = (valorTemperatura +++ 273.15)
        document.querySelector('#resultadokelvin').value=kelvin.toFixed(2)
        rankine = ((valorTemperatura * 9/5) + 491.67)
        document.querySelector('#resultadorankine').value=rankine.toFixed(2)
    }

    // Fahrenheit para C, K, R. 
    else if(origem.value == '2'){
        celsius = ((valorTemperatura - 32) / 1.8)
        document.querySelector('#resultadocelsius').value=celsius.toFixed(2)
        kelvin = (((valorTemperatura - 32) * 5/9)+ 273.15)
        document.querySelector('#resultadokelvin').value=kelvin.toFixed(2)
        rankine = (valorTemperatura +++ 459.67)
        document.querySelector('#resultadorankine').value=rankine.toFixed(2)
    }

    // Kelvin para C, F, R. 
    else if(origem.value == '3'){
        celsius = (valorTemperatura - 273.15)
        document.querySelector('#resultadocelsius').value=celsius.toFixed(2)
        fahrenheit = (((valorTemperatura - 273.15)* 1.8)+ 32)
        document.querySelector('#resultadofahrenheit').value=fahrenheit.toFixed(2)
        rankine = (valorTemperatura * 1.8)
        document.querySelector('#resultadorankine').value=rankine.toFixed(2)
    }

    // Rankine para C, F, K. 
    else if(origem.value == '4'){
        celsius = ((valorTemperatura - 491.67) * 5/9)
        document.querySelector('#resultadocelsius').value=celsius.toFixed(2)
        fahrenheit = (valorTemperatura - 459.67)
        document.querySelector('#resultadofahrenheit').value=fahrenheit.toFixed(2)
        kelvin = (valorTemperatura / 1.8)
        document.querySelector('#resultadokelvin').value=kelvin.toFixed(2)


    }
}