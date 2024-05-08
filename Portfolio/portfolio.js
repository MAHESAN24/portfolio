// var para = document.querySelector('.My_Project_List_Parent_Containner').appendChild(document.createElement('p'))
var list =document.querySelectorAll('.Project_list li')
var para = document.querySelector('.Showmgs')

var words = "";
index = 0;


list.forEach((li)=>{
    li.addEventListener('mouseover',()=>{
        switch(li.innerText){
            case '2d mini project game':
                words = `Escape form trap of some obticlas`.split('')
                break;
            case '3D infinty run game':
                words = `this game of copy from Subway Surfes do make the game from unity`.split('')
                break;
            case `3D miniature game`:
                words = '3rd party shooting mini game'.split('')
                break;
            case `Multiplayer Schooting`:
                words = 'the real zombie Shooting game'.split('')
                break;
            default:
                para.innerHTML = "Please select different list item"
        }
    })
    li.addEventListener('mouseout',()=>{
        para.innerHTML = ""
        words = ""
        index = 0
    })
})

setInterval(()=>{
    if(index < words.length){
        para.innerHTML += words[index]
        index++ 
    }
},100)