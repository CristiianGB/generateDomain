let art = ["the", "a", "an", "our", "his", "her", "in", "on", "behind"];
let adj = ["abrupt", "great", "big", "determinated", "protest", "hollow"];
let nombres = [
  "car",
  "movies",
  "truck",
  "drink",
  "school",
  "biscuit",
  "mountain",
];
let domain = [
  ".es",
  ".com",
  ".biz",
  ".org",
  ".net",
  ".tv",
  ".info",
  ".eu",
  ".de",
  ".in",
];

// let randomart = Math.floor(Math.random() * art.length);
// let randomadj = Math.floor(Math.random() * adj.length);
// let randomnombres = Math.floor(Math.random() * nombres.length);
// let randomdomain = Math.floor(Math.random() * domain.length);

// let arraydomain = [];

// let randomDomain = (arraydomain.push = [
//   art[randomart] +
//     adj[randomadj] +
//     nombres[randomnombres] +
//     domain[randomdomain],
// ]);
// console.log(arraydomain);
// function todosLosPosiblesDomain(datos) {
//     return datos.reduce((a, v) => a.concat(a.map(d => [v].concat(d))) [[]] ); 
// }

function todosLosDominios (){
    let dominioCompleto= ""
    let domainhack = ""
    let artrandom = ""
    for(i=0; i<art.length;i++){
        artrandom = art[i]
        let adjrandom = ""
        for(j=0; j<adj.length; j++){
            adjrandom = adj[j]
            let nombresrandom = ""
            for(x=0; x<nombres.length; x++){
                nombresrandom = nombres[x]
                domainrandom = ""
                for( y=0; y<domain.length; y++){
                    domainrandom = domain[y]
                    dominioCompleto = artrandom+adjrandom+nombresrandom
                    domainhack = searchhack(dominioCompleto,domain[y].slice(1,domain[y].length))+domainrandom;
                    console.log(domainhack)
                }
            }
        }
    }
   
}
function searchhack(palabra1, palabra2){
    if (palabra1.endsWith(palabra2)){
        let posicion = palabra1.lastIndexOf(palabra2);
        let palabraNueva = palabra1.slice(0,posicion);
        return palabraNueva;
    }
    return palabra1;
}
todosLosDominios ()
