let btnMeme=document.getElementById("btnMeme")
btnMeme.addEventListener('click',e=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(function(result){
        //console.log(result)
        return result.json()
    },function(error){})
    .then((jsonRes)=>{return jsonRes.data.memes})
    .then((data)=>{ 
        let meme=Object.keys(data)
        let randomMeme=meme[parseInt(Math.random()*meme.length)]
       
        if(document.getElementById("meme_img")){
            let img=document.getElementById("meme_img")
            img.setAttribute('src',data[randomMeme].url)
        }else{
            //first time pressing the button after page load
            let div=document.createElement("div")
            div.innerHTML=`<img id="meme_img" src="${data[randomMeme].url}"/>`
            document.getElementById("memes").append(div)
        }
        
    })
})



