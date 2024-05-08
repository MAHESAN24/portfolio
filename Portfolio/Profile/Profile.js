var skillImg = document.querySelectorAll(".Skills img");
var title = document.querySelector('.title')
var TitleName = 'GAME DEVELOPMENT'.split('')
var index = 0;
// console.log(TitleName.length)

setInterval(()=>{
    if(index < 16){
        title.innerHTML += TitleName[index]
        index++
    }else{
        title.innerHTML = ''
        index = 0;
    }
    title.style.color = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()}`
},100)

function getRandom(){
    return Math.floor(Math.random()* 250)
}

skillImg.forEach((img)=> {
    img.addEventListener('mouseover',()=>{
        img.style.boxShadow = `0px 0px 30px rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`
        img.innerHTML = img.alt
    })
    img.addEventListener('mouseout',()=>{
        img.style.boxShadow = '2px 3px 10px rgb(14, 18, 228)'
    })
})
