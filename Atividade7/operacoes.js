var numero1, numero2, soma, subtracao, produto, divisao, resto;

numero1 = parseFloat(prompt("Digite um número:"));
numero2 = parseFloat(prompt("Digite o segundo número:"));

soma= numero1+numero2;
subtracao= numero1-numero2;
produto=numero1*numero2;
divisao=numero1/numero2;
resto=numero1%numero2;

alert("A soma é: " + soma);
alert("A subtração é: " + subtracao);
alert("O produto é: " + produto);
alert("A divisão é: " + divisao);
alert("O resto é: " + resto);