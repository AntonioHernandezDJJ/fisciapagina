function calcularlaintesidadonda() {
    // Obtener los valores desde los inputs
    const amplitudparaIDO = parseFloat(document.getElementById('amplitudparaIDO').value);
    const densidadparaIDO = parseFloat(document.getElementById('densidadparaIDO').value);
    const FrecuenciaangularIDO = parseFloat(document.getElementById('FrecuenciaangularIDO').value);
    const VelocidadIDO = parseFloat(document.getElementById('VelocidadIDO').value);

    // Verificar si los valores son números válidos
    if (isNaN(amplitudparaIDO) || isNaN(densidadparaIDO) || isNaN(FrecuenciaangularIDO) || isNaN(VelocidadIDO)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const amplitudfinal = amplitudparaIDO * amplitudparaIDO;
    const frecuangufinal = FrecuenciaangularIDO * FrecuenciaangularIDO;
    const Intensidadfinaldelaonda = 0.5 * densidadparaIDO * frecuangufinal *amplitudfinal * VelocidadIDO ;

    // Mostrar el resultado en el elemento con id "ecuacionResultado"
    document.getElementById('resultintensidaddelaonda').textContent = `Resultado: ${Intensidadfinaldelaonda} W/m^2`;
}

function calcularvelocidadDO() {

    const frecuAnguVDO = parseFloat(document.getElementById('frecuAnguVDO').value);
    const NOndaVDO = parseFloat(document.getElementById('NOndaVDO').value);
    if (isNaN(frecuAnguVDO) || isNaN(NOndaVDO)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

   
    const velocidaddelaonda = frecuAnguVDO /NOndaVDO;

    // Mostrar el resultado en el elemento con id "ecuacionResultado"
    document.getElementById('reulveloonda').textContent = `Resultado: ${velocidaddelaonda} m/s`;
}


function calcularintensidalononda(){
    const velopropagacion = parseFloat(document.getElementById('velopropagacion').value);
    const frecuenciaVP = parseFloat(document.getElementById('frecuenciaVP').value);
    if (isNaN(velopropagacion) || isNaN(frecuenciaVP)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }
    const intensidadedelaondaresultado = velopropagacion /frecuenciaVP;
    document.getElementById('resulvelocidaddepropag').textContent = `Resultado: ${intensidadedelaondaresultado} m`;
}

function calcularnumondaaa(){

    const longituddeondaNO = parseFloat(document.getElementById('longituddeondaNO').value);
    if (isNaN(longituddeondaNO)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }
    const dospii = 2*3.1416;
    const numerodeondafinal = dospii / longituddeondaNO
    document.getElementById('calcularnumondaaa').textContent = `Resultado: ${numerodeondafinal} rad/m`;

}
function calcularfrecuencia(){
    const velocidadFO = parseFloat(document.getElementById('velocidadFO').value);
    const longFO = parseFloat(document.getElementById('longFO').value);
    if (isNaN(velocidadFO) || isNaN(longFO)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }
    const frecuenciadelaonda = velocidadFO /longFO;
    document.getElementById('calcularfrec').textContent = `Resultado: ${frecuenciadelaonda} Hz`;
}

function calcularmodulvdelagua  (){
    const MVDELAGUA = parseFloat(document.getElementById('MVDELAGUA').value);
    const densidadp = parseFloat(document.getElementById('densidadp').value);
    if (isNaN(densidadp) || isNaN(MVDELAGUA)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const divisionn = MVDELAGUA / densidadp;
    const movolufinal = Math.sqrt(divisionn);
    document.getElementById('calcularmvdelagua').textContent = `Resultado: ${movolufinal} m/s`;
}

function calcularvelocidadsm  (){
    const MEEM = parseFloat(document.getElementById('MEEM').value);
    const DDM = parseFloat(document.getElementById('DDM').value);
    if (isNaN(DDM) || isNaN(MEEM)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const divisionn = MEEM / DDM;
    const veloenmetal = Math.sqrt(divisionn);
    document.getElementById('calcularvelocidadSM').textContent = `Resultado: ${veloenmetal} m/s`;
}

function calcularvelocidadsm  (){
    const MEEM = parseFloat(document.getElementById('MEEM').value);
    const DDM = parseFloat(document.getElementById('DDM').value);
    if (isNaN(DDM) || isNaN(MEEM)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const divisionn = MEEM / DDM;
    const veloenmetal = Math.sqrt(divisionn);
    document.getElementById('calcularvelocidadSM').textContent = `Resultado: ${veloenmetal} m/s`;
}

function frecangular(){
    const NUMOSC = parseFloat(document.getElementById('NUMOSC').value);
    const time = parseFloat(document.getElementById('time').value);
    if (isNaN(time) || isNaN(NUMOSC)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const dosspii = 2 * 3.1416 * NUMOSC;
    const frecuangularfinal = dosspii / time;
    document.getElementById('calcularfrecangul').textContent = `Resultado: ${frecuangularfinal} rad/s`;
}



function calculartimepodepro  (){
    const distanciaTP = parseFloat(document.getElementById('distanciaTP').value);
    const velocidadTP = parseFloat(document.getElementById('velocidadTP').value);
    if (isNaN(distanciaTP) || isNaN(velocidadTP)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const tiempodepro = distanciaTP / velocidadTP;
        document.getElementById('calculartimepodepropagacion').textContent = `Resultado: ${tiempodepro} s`;
}



function calculardiser  (){
    const VeloDER = parseFloat(document.getElementById('VeloDER').value);
    const timeDER = parseFloat(document.getElementById('timeDER').value);
    if (isNaN(VeloDER) || isNaN(timeDER)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }

    const distanciadp = VeloDER * timeDER;
        document.getElementById('calculardiserecptor').textContent = `Resultado: ${distanciadp} m/s`;
}


function calculartubocerrado(){
    const velotuboc = parseFloat(document.getElementById('velotuboc').value);
    const tonotbc = parseFloat(document.getElementById('tonotbc').value);
    const longtbc = parseFloat(document.getElementById('longtbc').value);

    if (isNaN(velotuboc) || isNaN(tonotbc)|| isNaN(longtbc)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }
    const tubocefin = velotuboc * tonotbc;
    const tubocerr =  4*longtbc
    const tubocerradooooooooooooo =  tubocefin / tubocerr;
        document.getElementById('calculartbresul').textContent = `Resultado: ${tubocerradooooooooooooo} Hz`;
}

function calculartuboabierto(){
    const velotuboc2 = parseFloat(document.getElementById('velotuboc2').value);
    const tonotbc2 = parseFloat(document.getElementById('tonotbc2').value);
    const longtbc2 = parseFloat(document.getElementById('longtbc2').value);

    if (isNaN(velotuboc2) || isNaN(tonotbc2)|| isNaN(longtbc2)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return;
    }
    const tubocefin = velotuboc2 * tonotbc2;
    const tubocerr =  2*longtbc2
    const tubocerradooooooooooooo =  tubocefin / tubocerr;
        document.getElementById('calculartbresulabierto').textContent = `Resultado: ${tubocerradooooooooooooo} Hz`;
}