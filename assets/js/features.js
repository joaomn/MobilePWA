// biblioteca de manipulação de dom <script src= "https://code.jquery.com/jquery-3.7.1.min.js"></script> (incuir no html principal)



fetch('http://api.weatherstack.com/autocomplete' + "?access_key=33a4d331f8f5920713fd707d04cb4dae" 
+ "&query=" + "london")
   
 //criando a promesse
.then((resposta)=>{ //cria um objeto dentrod e uma função
    return resposta.json() //pega apenas o json deste objeto
})
.then((data) =>{ //tratamento e manipulação do dom atravez das infromações do objeto

      
console.log(data)
})
.catch((qlqrnome)=>{
console.log(" o erro foi causado por " + qlqrnome)
})// retorna um objeto com os dados do usuário






function obterReceita(receita){
fetch('https://api.edamam.com/api/recipes/v2?' + "type=public" + '&q=' + receita + '&app_id=89e2db89' 
+ '&app_key=b2845d8c0787787706ecc19951a4d390' + '&ingr=1-10')
.then((resp)=>{
    return resp.json();
})
.then((data)=>{
   
   // $('#fototeste').attr("src",data.hits.recives.image ) 
    
   
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})



}
