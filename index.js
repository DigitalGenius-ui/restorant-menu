const sectionPart = document.querySelector(".section-center");
const btns = document.querySelectorAll(".all");

window.addEventListener("DOMContentLoaded", function(){
   myMenuItem(restorant);
})

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category = e.currentTarget.dataset.id;
        const filterMenu = restorant.filter(function(items){
            if(items.category === category){
                return items;
            }
        });
        if(category === 'all'){
            return myMenuItem(restorant);
        }else {
            return myMenuItem(filterMenu);
        }
    })
})


function myMenuItem(menuItem){
    let myMenu = menuItem.map(function(item){
        return `<div class="menu-flex">
            <img src="${item.img}" alt="">
            <div class="menu-price">
                <div class="price-flex">
                <h2>${item.name}</h2>
                <h2>${item.price}</h2>
            </div> 
            <p>${item.text}</p>   
            </div>
        </div>`;
    })
    myMenu = myMenu.join('');
    sectionPart.innerHTML = myMenu;
}
