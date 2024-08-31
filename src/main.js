const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");
const cards = document.querySelector(".cards");

let data = [];

const render = () => {
    cards.innerHTML = data.map((item) => `<div class="w-[300px] h-[50px] border border-black p-[10px]">
    <h1 class="text-[30px] font-bold">${item.first_name}</h1>
    <p class="text-[20px] font-light">${item.address}</p>
    <button onclick="editItem(${item.id})" class="bg-green-500">Edit</button>
    <button onclick="deletItem(${item.id})" class="bg-red-500">Delet</button>
</div>`).join("");
};

form.addEventListener("subit", (e) =>{
    e.preventDefault();

    let obj = { id: Date.now() };
    for (let i  of inputs){
        obj[i.name] = i.value;
        i.value = "";
    }
    data.push(obj);
    render();
});

const deletItem = (id) => {
    data = data.filter((item) => item.id !== id);
    render();
};

const editItem = (id) => {
 const first_name = prompt("First name");
 const address = prompt("address");
 data = data.map((item) =>
    item.id === id ? {first_name, address, id } : item  
);
render();
};
