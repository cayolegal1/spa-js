const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export default getHash;


// location es parte del objecto window. Location tiene el atributo hash.
// http://localhost:8080/#/1/
//location.hash trae el fragmento de la url a partir de donde encuentre un #. En este caso traería #/1/
// el hash “#/1/” cambia cuando damos clic en el elemento de ancla, cuando interactuamos con el Html de Home.
//  <a href="#/1/">NAME </a>
// Slice(parametro1, parametro2) puede tener dos parametros para delimitar el corte de un ARRAY o en este caso string.
// const location.hash= "#/1/";
// hash.slice(1)
// //resultado = "/1/"
// en este caso se corta desde el indice [1] del array hasta el final del array
// toLocaleLowerCase() creo que cumple la misma funcion que toLowerCase()
//  toLocaleLowerCase()===toLowerCase
// 4.split() devuelve un array divido por el parametro de string seleccionado .

// const location.hash.slice(1).toLocaleLowerCase()= "/1/";
// const.split("/");
// //resultado ["", "1", ""]
// 5.Finalmente [1] selecciona el numero del HASH que podemos devolver

// const anterior = ["", "1", ""];
// anterior[1] =1;
//output final: 1


//el || "/" nos indica que se esta accediendo a la raiz del proyecto y no se navega por alguna sección


// ¿Por qué toLocaleLowerCase y no simplemente toLowerCase?
// Porque toLocaleLowerCase se basa en la ubicacion de mi servidor por ende respetará la forma de usar numeros en esa zona por ejemplo en America se usa la coma para separar la unidad de mil, mientras que en latinoamerica se usa el punto etc.