let resultado = document.querySelector('p');
document.querySelector('button').addEventListener('click', ()=>{
    let texto=document.querySelector('input').value;
    let partes = texto.split(',').map(nome => nome.trim());
    let ordenados = partes.sort();
    console.log(texto)
    console.log(partes)
    console.log(ordenados)
    resultado.innerHTML = ordenados.join('<br>');;
})