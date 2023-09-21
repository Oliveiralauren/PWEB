var nome, nota1, nota2, nota3, media;

nome = prompt("Digite seu nome:");
nota1 = parseFloat(prompt("Digite sua primeira nota"));
nota2 = parseFloat(prompt("Digite sua segunda nota"));
nota3 = parseFloat(prompt("Digite sua terceira nota"));

media= ((nota1+nota2+nota3)/3);

alert("Seu nome é: " + nome + "\nSua média é: "+media.toFixed(2));