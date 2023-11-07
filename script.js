const apikey='0e255e2a27f7881e8e2d3970784cb99e'

//accessing all required html elements

const input=document.getElementById('inputval')
const btnele=document.getElementById('btn')
const temp=document.getElementById('temp')
const discription=document.getElementById('description')
const locat=document.getElementById('location')
const imag=document.getElementById('image')
const iconele=document.querySelector('.bi')

//adding the eventlisteners to the button element
btnele.addEventListener('click',(e)=>{

    //condition for checking whether user entered the location
    if(input.value==''){
        alert('enter the location')
    }
    else{

    //store the location entered by user
    let loc=input.value
    //api url
    url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`

    // using fetch method to fetch the location weather details

    fetch(url)
    .then((data)=>data.json())
    .then(da=>{
        console.log(da)
        //object distructing
        const {name}=da;
        const {feels_like}=da.main;
        const {description,icon}=da.weather[0]

        //assigning the values to html elements
        icon.className=`bi-${icon}`
        locat.innerText=name
        temp.innerText=Math.round(feels_like-273)
        discription.innerText=description   
    })
    .catch(()=>{
        alert("plz enter the valid location")
    })
    }
    //To make input value empty
input.value=''
})

