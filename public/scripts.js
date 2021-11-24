// nao se sabe porque nao funciona
function main()
{
    let btn = document.getElementById('btn')
    btn.addEventListener('click', ()=>{
        filldiv();
    })
    let btnlimpar = document.getElementById('btnClear')

    btnlimpar.addEventListener('click', ()=>{
        limpar();
    })
}
function limpar()
{
    document.getElementById("texto_caixa").value="";
    document.getElementById('div1').innerHTML="";
    
}

function filldiv(){
    
    let texto = document.getElementById('texto_caixa').value
    if(texto == "")
    {
        alert( `Introduza um texto!`)
    }else{
        const input = document.querySelector('.div1')
        const verde = document.getElementById('verde')
        const vermelho = document.getElementById('vermelho')
        input.style.color='pink'
        if(verde.checked & vermelho.checked)
        {
            input.style.color= 'blue'
        }else if(vermelho.checked)
        {
            input.style.color = 'red'
        }
        else if(verde.checked )
        {
            input.style.color= 'green'
        }
        document.getElementById('div1').innerHTML= `<h1> ${texto} </h1>`
      
    }
}