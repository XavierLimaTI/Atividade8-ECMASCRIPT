var verificar = new Promise((resolve,reject) => {
    var nome = "ADM";
    var senha = "ADM";

    if(nome === "ADM" & senha === "ADM"){
        resolve("O usuário é um administrador!")
    }else{
        reject("O usuário está incorreto ou não é um administrador")
    }
})

verificar.then((x) => {
    console.log(x);
})
