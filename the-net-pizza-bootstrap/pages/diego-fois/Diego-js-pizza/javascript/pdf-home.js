const buildDrinksMenu = (menuItems) => {
    const drinksMenu = document.getElementById('drinks')

    for(let item of menuItems){
        const liElement = document.createElement('li');
        liElement.innerText = item.title;
        drinksMenu.appendChild(liElement);
    }

    console.log(drinksMenu)
}



fetch('https://my-json-server.typicode.com/DiegoFCJ/demo_fs_json/drinks')
.then(res => res.json())
.then(res => buildDrinksMenu(res));

