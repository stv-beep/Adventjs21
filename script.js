/* 1 - OVEJAS */
/*var ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]


  function contarOvejas(ovejas) {
    let filtro = ovejas.filter(ovejas => (
         
          ovejas.color === 'rojo' &
          (ovejas.name.toLowerCase().includes('a') & ovejas.name.toLowerCase().includes('n'))
      
          )
      )
          
      return filtro
  }
  

    
  const ovejasFiltradas = contarOvejas(ovejas)

  console.log(ovejasFiltradas)*/
  

/* 2 - REGALS*/
 /* const carta = 'bici coche balón _playstation bici coche peluche';
 

  function listGifts(letter) {
    // ¡Tú puedes!
    let llista = letter.split(' ');
    //console.log(llista);
    var comptador = 0;
    for (i = 0; i < llista.length; i++){
        for(x = 0; x < llista.length; x++){

            if(llista[i] == llista[x]){
                comptador++;
                //console.log("dins de if " +comptador);
            } else { comptador = 0;}
            //console.log("else " +comptador);
        }
    }


    return llista
   }


const regalos = listGifts(carta)

console.log(regalos)*/

/* 3 - FASTIDIO*/
function isValid(letter) {
    if( !letter.includes("[") & !letter.includes("{") & letter.includes("(") & letter.includes(")") & !letter.includes("()") & letter.indexOf("(") < letter.indexOf(")")
    ) {
        return true;

    } else if (letter.includes("()") || letter.includes("(") || letter.includes(")")
                 
            ) {
            return false;
            
    }

}
   console.log(isValid("bici coche (balón) bici coche peluche"))
   console.log(isValid("(muñeca) consola bici"))
   console.log(isValid("bici coche (balón bici coche"))
   console.log(isValid("peluche (bici [coche) bici coche balón"))
   console.log(isValid("(peluche {) bici"))
   console.log(isValid("() bici"))
   console.log(isValid(")bici( casa play")) //false



/* 5 - DAYS TO XMAS*/
/*const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0

const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5
const date5 = new Date('Dec 26, 2021')
daysToXmas(date5) // -1
const date6 = new Date('Dec 31, 2021')
daysToXmas(date6) // -6
const date7 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date7) // -7
const date8 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date8) // -7


function daysToXmas(date) {
    const fumfum = new Date('Dec 25, 2021')
    var resta = fumfum - date;
    var milisegons = 24 * 1000 * 60 * 60;
    var convertir = resta / milisegons;

    
    return Math.ceil(convertir);
}
console.log(daysToXmas(date1));
console.log(daysToXmas(date2));
console.log(daysToXmas(date3));
console.log(daysToXmas(date4));
console.log(daysToXmas(date5));
console.log(daysToXmas(date6));
console.log(daysToXmas(date7));
console.log(daysToXmas(date8));*/