
function IVA(){
    let v1=parseInt(document.getElementById("precioInicial").value)
    let v2=parseInt(document.getElementById("iva").value)
    let iva=(v1*v2)/100
    let total= iva+v1
    //mostrar en input
    document.getElementById("resultadoIva").value  = "Total precio: " + total

}

function cuadrado(){
    let l=parseInt(document.getElementById("lado").value)
    let areaop= l*l
    let perimetroop = l*4
    //mostrar en input
    document.getElementById("resultadoArea").value=areaop+ " cm2" 
    //mostrar en input
    document.getElementById("resultadoPerimetro").value=+perimetroop + " cm2"
}


function dosdigitos(){

    let numero = document.getElementById("numerodosdigitos").value
    let dec = Math.floor (numero/10)
    let unid = numero % 10

    document.getElementById("decenas").value = dec
    document.getElementById("unidades").value = unid
}


function calculIngredientes(){

    let persona = parseInt(document.getElementById("numPersonas").value)
    let cebolla = parseInt(persona * 60)
    let huevos = parseInt(persona * 1)
    let papas = parseInt(persona * 200)

    //Mostrar en los input//

    document.getElementById("papas").value = papas + " gramos son necesarios"
    document.getElementById("huevitos").value = huevos + " huevos son necesarias"
    document.getElementById("lacebolla").value = cebolla + " gramos son necesarias"

}

let intentos = 5
let objetivo = Math.floor(Math.random() * 101)
let numeros =[]
console.log(objetivo)
function adivinanza(){
    let e = parseInt(document.getElementById("entrada").value)
        if (intentos <= 0){
            r=("No tienes mas intentos")
            document.getElementById("salida").value=r
            return
        }
    
    numeros.push(e)
    intentos--

        if (e == objetivo){
           r="Adivinaste el numero"}
        else if (e > objetivo){
           r="Intenta de nuevo, el numero ingresado es mayor que el objetivo"}
        else {
           r="Intenta de nuevo, el numero ingresado es menor que el objetivo"
        }
    document.getElementById("salida").value=r
    document.getElementById("lista").textContent = "Numeros ingresados hasta ahora: " + numeros
    document.getElementById("intentos").textContent = "Intentos restantes: " + intentos
}

function EjerFibonacci(){
    let n = parseInt(document.getElementById("series").value)

    let a = 0
    let b = 1
    let serie = []

    for(let i=0; i<n; i++){
        serie.push(a)

        let otro = a+b
        a = b
        b = otro
    }
    document.getElementById("resultadoF").textContent  = serie
}

function MayoroIgual(){
    let n1 = parseInt(document.getElementById("primerN").value)
    let n2 = parseInt(document.getElementById("segundoN").value)

    if (n1 > n2){
        s="El numero "+ n1 + " es mayor que el numero " + n2}
    else if (n1 < n2){
        s="El numero "+ n2 + " es mayor que el numero " + n1}
    else if (n1 == n2){
        s="Los numeros son iguales"
    }

    document.getElementById("resultadoN2").value = s

}

function calcularFactorial(){
    let numeroF = parseInt(document.getElementById("factorial").value)
    let resultadoF = 1

    if (numeroF < 0){   
        document.getElementById("resultadoFactorial").textContent="Error"
        return
    }

    for(let i = 1; i <= numeroF; i++){
        resultadoF = resultadoF * i
    }
    document.getElementById("resultadoFactorial").textContent= "Resultado: " + resultadoF
    document.getElementById("resultadoFactorial2").textContent= "El factorial de " + numeroF + " es: " + resultadoF
}

function multiplosdeseis(){
    let a = parseInt(document.getElementById("numero1").value)
    let b = parseInt(document.getElementById("numero2").value)
    let multiplos = []

    if (a > b){
        let temp = a
        a = b
        b = temp
    }

    for(let i = a; i <= b; i++){
        if (i % 6 == 0){
            multiplos.push(i)
        }
    }

    document.getElementById("resultadoMultiplos").textContent =
        "Entre " + a + " y " + b + " Los Múltiplos de 6 son : " + multiplos
}

function arregloN20(){
    let principal = []
    let par = []
    let impar = []

    for(let i = 0; i < 20; i++){
        let aleatorios = Math.floor(Math.random() * 101)
        principal.push(aleatorios)
    }

    for(let i = 0; i < principal.length; i++){
        if (principal[i] % 2 == 0){
            par.push(principal[i])
        } else {
            impar.push(principal[i])
        }
    }
    document.getElementById("principal").textContent= "Principal: " + principal
    document.getElementById("pares").textContent= "Pares: " + par
    document.getElementById("impares").textContent= "Impares: " + impar
}

function arregloN10(){
    let principalA = []
    let multiplos = []

    for(let i = 0; i < 10; i++){
        let aleatorios = Math.floor(Math.random() * 11) + 10 
        principalA.push(aleatorios)
    }

    for(let i = 0; i < principalA.length; i++){
        if(principalA[i] % 3 != 0){
            multiplos.push(principalA[i])
        }
    }
    document.getElementById("arreglo").textContent= "Principal: " + principalA
    document.getElementById("resultadoA").textContent= "Sin los multiplos: " + multiplos
}

function Areatriangulo(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let c = parseInt(document.getElementById("c").value)

    let tipo

    if(a == b && b == c){
        tipo = "Equilátero"
    } else if(a == b || a == c || b == c){
        tipo = "Isósceles"
    } else{ tipo = "Escaleno"}

    let s = (a+b+c) /2
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c)) 
    let redondeo = Math.round(area)

    document.getElementById("areaT").textContent= "El área del triangulo es: " + redondeo + "cm2"
    document.getElementById("tipoT").textContent= "El tipo de triangulo es: " + tipo
}
function contadorPalabras(){
    let p = document.getElementById("palabra").value
    let espacio = p.split(" ")
    let longitud = []
    let totalP = 0

    for(let i=0; i < espacio.length; i++){
        let cont = espacio[i].length

        longitud.push(cont)
        totalP+= cont
    }
    document.getElementById("principalP").textContent= "Palabras: " + espacio
    document.getElementById("long").textContent= "Cantidad de letras: " + longitud
    document.getElementById("total").textContent= "Total de carácteres: " + totalP
}
function GenerarregloI(){
    let original = []
    let manual = []

    for(let i=0; i<10; i++){
        let aleat = Math.floor(Math.random() * 100)
        original.push(aleat)
    }
    for(let i=original.length -1; i>=0; i--){   
        manual.push(original[i])
    }
    let funcion = original.reverse()   

    document.getElementById("original").textContent= "Original: " + original
    document.getElementById("Imanual").textContent= "Invertido manual: " + manual
    document.getElementById("Ireverse").textContent= "Invertido con reverse: " + funcion
}
function calculadora(){
    let a = parseInt(document.getElementById("n1").value)
    let b = parseInt(document.getElementById("n2").value)
    let opcion = document.querySelector('input[name="e"]:checked')

    if(!opcion){
        document.getElementById("resultadoC").textContent= "Seleccione una opcion"
        return
    }
    let m

    if(opcion.value == "suma"){
        m= a+b
    }else if(opcion.value == "resta"){
        m= a-b
    }else if(opcion.value == "multiplicar"){
        m= a*b
    }else if(opcion.value == "division"){
        m= a/b
    }
    document.getElementById("resultadoC").textContent= "Resultado: " + m
}