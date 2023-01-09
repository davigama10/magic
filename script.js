var myArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];

var fileira1 = [];
var fileira2 = [];
var fileira3 = [];

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }
  

myArray = shuffle(myArray);

let inicio = 1;
let main_counter = 0;

function construct(){
    console.log("CONSTRUIU");
    fileira1 = [];
    fileira2 = [];
    fileira3 = [];
    var aux = 0;
    for (var i = 0 ; i < 21 ; i++){
        if (aux == 0){
            fileira1.push(myArray[i]);
            aux++;
        }
        else if (aux == 1){
            fileira2.push(myArray[i]);
            aux++;
        }
        else if (aux == 2){
            fileira3.push(myArray[i]);
            aux = 0;
        }
    }

    if (inicio == 1){
        window.onload = function () {
            print_tudo();
            }
        inicio = 0;
    }

    else {
        print_tudo();
    }

    if (main_counter == 3){
        final();
    }
    main_counter++;
    console.log(main_counter);

}

construct();
//print_tudo();

function reconstruct(aux){
    let aux_fileira = aux;
    
    console.clear();

    myArray = [];

    if (aux_fileira == 1){
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira2[i]);
        }
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira1[i]);
        }
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira3[i]);
        }
    }

    else if (aux_fileira == 2){
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira1[i]);
        }
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira2[i]);
        }
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira3[i]);
        }
    }

    else if (aux_fileira == 3){
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira1[i]);
        }
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira3[i]);
        }
        for (var i = 0 ; i < 7 ; i++){
            myArray.push(fileira2[i]);
        }
    }

    construct();
}

function final(){

    resultDIV = document.getElementById('result');
    resultDIV.innerHTML = "";
 
    let aux = document.createElement("h2");

    let text = 'Você pensou no número: ' + myArray[10];
        
    aux.innerHTML = text;
    resultDIV.append(aux);

    console.log("seu número é: ")
    console.log(myArray[10]);
}

function print_tudo(){

    let resultDIV = document.getElementById('a');
    resultDIV.innerHTML = "";

    fileira1.forEach(function(opa){

        
        let aux = document.createElement("li");
        
        aux.innerHTML = opa;
        resultDIV.append(aux);
        
    })

    resultDIV = document.getElementById('b');
    resultDIV.innerHTML = "";

    fileira2.forEach(function(opa){

        
        let aux = document.createElement("li");
        
        aux.innerHTML = opa;
        resultDIV.append(aux);
        
    })

    resultDIV = document.getElementById('c');
    resultDIV.innerHTML = "";

    fileira3.forEach(function(opa){

        
        let aux = document.createElement("li");
        
        aux.innerHTML = opa;
        resultDIV.append(aux);
        
    })

    console.log(fileira1);
    console.log(fileira2);
    console.log(fileira3);
}

// print_tudo();
// reconstruct();
// construct();
// print_tudo();
// reconstruct();
// construct();
// print_tudo();

// final();
