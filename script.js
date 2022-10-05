
function getData() {
    //storing values in the local variable with respect to the id of input tags
        var id = document.getElementById('pId').value;
        var nextPokemon= document.getElementById('pNext');
        var previousPokemon=document.getElementById("pPrevious");
        var pokemonNumber = document.getElementById('pNumber');
        var pokemonName = document.getElementById('pName');
        var pokemonHeight = document.getElementById('pHeight');
        var pokemonWeight = document.getElementById('pWeight');
        var pokemonImage = document.getElementById('pImage');
        var index= parseInt(id);  
        // need to convert to int because need to perform arithmetic operations while passing through json file with the array concept
        
    const ISOK = 200;
    //for checcking the request 
    var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";
    var request = new XMLHttpRequest();
    // calling on load function 
    request.onload = function() {
    if (request.status === ISOK){
        
        var obj = JSON.parse(request.responseText);
            //converting json  to js object
    
        pokemonNumber.value = obj.pokemon[id - 1].num;
        pokemonName.value = obj.pokemon[id - 1].name;
        pokemonHeight.value = obj.pokemon[id - 1].height;
        pokemonWeight.value = obj.pokemon[id - 1].weight;
        pokemonImage.src = obj.pokemon[id - 1].img;
        var size = obj.pokemon.length;
        // getting length of the json objects
    
      

       // function will be called when previous button is clicked
        previousPokemon.onclick = function() {
            //decreasing index by one to get previous pokemon
            index=index-1;
            if(index  >= 1) {
                
                document.getElementById('pId').value = index;
                pokemonNumber.value = obj.pokemon[index-1].num;
                pokemonName.value = obj.pokemon[index-1].name;
                pokemonHeight.value = obj.pokemon[index-1].height;
                pokemonWeight.value = obj.pokemon[index-1].weight;
                pokemonImage.src = obj.pokemon[index-1].img;
            }
            else{
                
              alert("FIRST POKEMON!!!!!!!!!!!");
            }
            
        };

        
         // function will be called when next pokemon button is clicked
      nextPokemon.onclick = function () {
            
            if (index < size) {
                
                document.getElementById('pId').value = index + 1;
                pokemonNumber.value = obj.pokemon[index].num;
                pokemonName.value = obj.pokemon[index].name;
                pokemonHeight.value = obj.pokemon[index].height;
                pokemonWeight.value = obj.pokemon[index].weight;
                pokemonImage.src = obj.pokemon[index].img;
                index++;
                //updating the indext to get next pokemon
            }
            else {
                
                alert("LAST pokemon!!!!!!");
            }
            
        };
            
        
       
    }
   }
   request.open("GET", url, true);
   request.send();
}





