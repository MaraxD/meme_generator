let btnMeme=document.getElementById("btnDad")
btnMeme.addEventListener('click',e=>{
    fetch("https://icanhazdadjoke.com/",{
        headers:{
            Accept:"application/json",
        },
    })
    .then(function(result){
        return result.json()
    },function(error){})
    .then((jsonRes)=>{
        return jsonRes
    })
    .then((data)=>{ 
        if(document.getElementById("joke")){
            let div=document.getElementById("joke")
            div.innerHTML=data.joke
        }else{
            let div=document.createElement("div")
            div.innerHTML=`<div id="joke">${data.joke}</div>`
            document.getElementById("dadJokes").append(div)
        }
       

        
    })
})



