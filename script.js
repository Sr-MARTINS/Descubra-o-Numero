const numero = document.querySelector("#inNumero");
const btn = document.querySelector("#inBtn");

const gerador = []

let set = Math.floor(Math.random() * 5 + 1);
console.log(set)
btn.addEventListener("click", () => {
    const num = Number(numero.value);

    if(num == set) {
        alert(`Parabens!! Você acertou o numero`);
        location.reload();
    }
    console.log(num)
})