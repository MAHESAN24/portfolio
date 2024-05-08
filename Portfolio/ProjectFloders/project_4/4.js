var zom_par = document.querySelector('.zombie_para')
var zom_img = document.querySelector('.zombie')
var btn = document.querySelectorAll('.nxt')

var img = ['Zombie_1','Zombie_2','Zombie_3' ]
var index = 0
var words ='';
var word_index = 0

btn.forEach((info)=>{
    info.addEventListener('click',()=>{
        
        
        if(index < img.length-1){
            index++
            zom_img.style.backgroundImage = `url(/Images/mini_project/ShootGameImage/${img[index]}.png)`
            // console.log('less')
        }else{
            index = 0
            zom_img.style.backgroundImage = `url(/Images/mini_project/ShootGameImage/${img[index]}.png)`
            // console.log('high')
        }


        switch(index){
            case 0:
                zom_par.innerHTML = `${img[index]}`
                zom_par.style.transition = '1s ease-in-out';
                break;
            case 1:
                zom_par.innerHTML = `${img[index]}`
                zom_par.style.transition = '1s ease-in-out';
                break;
            case 2:
                zom_par.innerHTML = `${img[index]}`
                zom_par.style.transition = '1s ease-in-out';
                break;
        }
        
        console.log(words , word_index)
        
    })
})

setInterval(()=>{
    if(word_index < words.length){
        // console.log(word_index)
        zom_par.innerHTML += words[word_index]
        word_index++
    }
},100)