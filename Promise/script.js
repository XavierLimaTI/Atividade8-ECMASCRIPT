// Fazer um Promise verificando se o usuário é o ADM utilizando: Nome = ADM e Senha = ADM

const idCheck = new Promise((resolve, reject) =>{
    var nome = "ADM";
    var senha = "ADM";

    if(nome === "ADM"){
        resolve("Usuario correto");
    }else{
        reject("Usuario incorreto");
    }

    if(senha === "ADM"){
        resolve("Senha correta");
    }else{
        reject("Senha incorreta");
    }
});

idCheck.then((data)=>{
    console.log(data)
});
