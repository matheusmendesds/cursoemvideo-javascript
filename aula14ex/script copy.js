function contar() {
    let n1 = document.getElementById('txti')
    let n2 = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('resultado')
    
    if (n1.value.length == 0 || n2.value.length == 0 || p.value.length == 0) {
        window.alert('ERRO , faltam dados!')
    } else {
        res.innerHTML = 'Contando'
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c}`
        }   
    }
} 

