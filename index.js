// console.log(fetch('https://imgd.aeplcdn.com/1056x594/n/cw/ec/95229/ninja-h2r-right-side-view-2.png?isig=0&q=80&wm=3')

// .then(response =>{
//     console.log(response)
//     return response.blob();
// })
// .then(blob =>{
//     console.log(blob)
//     document.querySelector('#myImage').src = URL.createObjectURL(blob)
// })
// .catch(error =>{
//     console.error(error)
// })
// )



//id selector
const content=document.querySelector("#content")

//loading page
window.addEventListener("load", () =>{
    getUsers()
})

function getUsers(){
    let html=""

    //fetch("http://https://bscs3a-crud.onrender.com:5000/api/members" , {mode: "cors"})
    fetch("https://bscs3a-crud-api.onrender.com/api/members" , {mode: "cors"})
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element) =>{
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })

}
