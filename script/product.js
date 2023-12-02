let purchased = []

let main = document.querySelector('main')

let items = JSON.parse(localStorage.getItem('storage'))


main.innerHTML = items.map((item,index) => {
    return `
    <div>
         <h2>${item.item}</h2>
         <p>${item.description}</p>
         <p>${item.price}</p>
         <button value = ${index} data-add>add</button>
    </div>
    
    
    
    `
}).join('')

function add(position) {
    purchased.push(items[position])
    localStorage.setItem('purchased', JSON.stringify(purchased))
}

main.addEventListener('click', function(){
    if(event.target.hasAttribute('data-add')){
        // alert('clicked')
        add(event.target.value)
    }
})

let a = items.filter(item => {
    return item.item == 'Nike'
})


