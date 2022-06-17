function calcu() {
    const operacao = prompt('escolha uma operação:\n 1-soma (+)\n 2-subtração(-) \n 3-multiplicação(*)\n 4-divisão real(/) \n 5- divisão inteira(%)\n 6-potenciação(**) ');

    if (!operacao || operacao>=7) {
        alert ('ERROR - OPERAÇÃO INVALIDA!')
        calcu();
    }

    else{
       
    let n1 = Number(prompt ('insira o primeiro valor: '));
    let n2 = Number(prompt ('insira o segundo valor: '));
    let resultado;
    
    if (!n1 || !n2) {
        alert ('ERROR - PARAMETROS INVALIDOS')
        calcu();
    }else {
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaop();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaop();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaop();
        }
        function divisaor() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaop();
        }
        function divisaoi() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaop();
        }
        function potencia() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} = ${resultado}`);
            novaop();
        }
    
    
        if (operacao == 1) {
            soma();
        }
        else if (operacao==2) {
            subtracao();
        }
        else if (operacao==3) {
            multiplicacao();
        }
        else if (operacao==4) {
            divisaor();
        }
        else if (operacao==5) {
            divisaoi();
        }
        else if (operacao==6) {
            potencia();
        }
    
    
    
    
        function novaop(){
            let opcao = prompt('Deseja fazer outra operação?\n 1-sim \n 2-nao')
    
            if (opcao == 1){
                calcu()
            }
            else if (opcao == 2) {
                alert('até mais')
            }
            else {
                alert('Digite uma opção valida')
                opcao();
            }
        } 
    }
    
    }

}

calcu();