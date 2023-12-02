let purchased = JSON.parse(localStorage.getItem('purchased'))

let main =document.querySelector('table')

main.innerHTML = purchased.map((item,index)=>{
    return `
               <tr>
               <td>${index + 1}</td>
               <td>${item.item}</td>
               <td>R${item.price}</td>
               <td><img src="${item.url}" alt=""></td>
               </tr>
    
       `
}).join('')