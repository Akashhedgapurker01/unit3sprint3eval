const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

async function getData(){
    let res = await fetch(url);

    let data = await res.json();
    appendData(data);
    
}

function appendData(data){
    let container = document.getElementById("container");

    data.forEach(function(element) {
        let h3 = document.createElement("h3");
        h3.innerText = data.vouchers.name;

        let img = document.createElement("img");
        img.src = data.vouchers.image;

        let p = document.createElement("p");
        h3.innerText = data.vouchers.price;

        let button = document.createElement(button);


        container.append(h3, img, p, button)

    });
}
getData();