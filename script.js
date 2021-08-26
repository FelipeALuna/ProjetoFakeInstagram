
const more = document.getElementById('more')
const content = document.querySelector(".card")
const search = document.querySelector("header div .busca form")
const father = more.parentNode
const noLiked = '/img/icons/heart.svg'

const liking = (objeto)=>{
    like = objeto
    if(like.src.includes(noLiked)){
        like.src = 'img/red-heart.png'
        like.nextElementSibling.innerHTML = '2 like'
    }
    else{
        like.src = '/img/icons/heart.svg'
        like.nextElementSibling.innerHTML = '1 like'
    }
}

more.style.cssText = 'cursor:pointer'


more.onclick = (event) => {
        const clone = content.cloneNode(true);
        father.insertBefore(clone,more)
}

search.onmousemove = (event) => {
    search.style.cssText= 'box-shadow:0px 1px 3px black'
}
search.onmouseout = (event) => {
    search.style.cssText= 'box-shadow:0px 0px 0px'
}

