// // console.log("Hello World");

// function getData(){
//     alert("Hii...");
// }

// const div = document.getElementsByTagName('div');
// div[0].innerText = "ABESEC";
// div[0].style.color = 'red';

const div = document.getElementsByClassName('container');
console.dir(div);
div[0].innerHTML = '<h2 style=color:red>Hii.. I am Using DOM</h2>'



const button = document.getElementById('btn');
console.log(button)
const loading = document.getElementById('disp');
function displayData() {
    // console.log("Hiii...");
    loading.innerHTML = " <h2>Data is Loading...</h2>";

    setTimeout(() => {
        const h2 = document.createElement('h2');
        h2.innerText = "CS B Students";
        h2.style.backgroundColor = 'blue'
        console.log(h2)
        div[0].appendChild(h2);

        const img = document.createElement('img');
        img.src = "https://miro.medium.com/v2/1*SdXRP8f2Lhin89Tht_GRIA.jpeg";
        img.setAttribute('height', 200);
        img.setAttribute('width', 200);
        console.log(img);
        div[0].appendChild(img);
        loading.innerHTML = '';
    }, 2000)

    

}

button.addEventListener('click', displayData);