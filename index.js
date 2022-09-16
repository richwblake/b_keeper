const housesSection = document.getElementById('houses');
const BASE_URL = 'http://localhost:3000/houses/';

const fetchHouses = () => {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(json => renderHouses(json))
};

const renderHouses = houses => {
    houses.forEach(house => {
        const div = document.createElement('div');
        const bName = document.createElement('h1');
        const numBs = document.createElement('p');
        const addB = document.createElement('button');

        bName.textContent = house.name;
        numBs.textContent = makeBString(house.num_bs);
        numBs.id = house.id
        addB.textContent = "Add a B!";

        addListenerToButton(addB, house.id);

        div.append(bName, numBs, addB);
        housesSection.append(div);
    });


};

const makeBString = num_bs => {
    let bString = "";
    for (let i = 0; i < num_bs; i++) {
        bString += " B";
    }
    console.log(bString.trim());
    return bString.trim();
};

const addListenerToButton = async (btn, id) => {
    btn.addEventListener('click', () => {
        patchBCount(id);
    });
};

const patchBCount = async id => {
    try {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ num_bs: getBNumFromP(id) + 1 }) 
        };
        const res = await fetch(BASE_URL + id, config);
        addBToDiv(id);
        console.log('success: ', res);
    } catch (e) {
        console.log('failure: ', e);
    }
};

const getBNumFromP = id => {
    const p = document.getElementById(id);
    return parseInt(p.textContent.trim().split(' ').length, 10);
};

const addBToDiv = id => {
    const p = document.getElementById(id);
    const new_num = makeBString(getBNumFromP(id) + 1);

    p.textContent = new_num;
};

fetchHouses();
