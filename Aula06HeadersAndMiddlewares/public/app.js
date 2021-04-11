$("button[id='jquery']").on("click", (event) => {
    event.preventDefault()
    $("button[id='jquery']").attr("disabled","disabled")//se nao tiver isso da double click e faz a requsiição duas vezes
    const nome = $("#nome").val().trim()
    const sobrenome = $("#sobrenome").val().trim()

    const user = {
        nome,
        sobrenome
    }
    /*
    $.post("/",user,(resposta) => {
        console.log(resposta)//printa a resposta do servidor para essa requisiçao post
    })
    */

    //Basicamente é a mesma coisa do $.post porem aqui tem mais opções, da pra por header
    $.ajax({
        url:"/",
        method:"POST",
        data:user,
        headers:{
            "x-client":"student",
            "x-class":500
        }
    }).then((resposta) => {
        console.log(resposta)
        $('body').append(resposta)
    }).catch((erro) => {
        console.log("Error:" + erro)
    })

    $("button[id='jquery']").removeAttr("disabled")//habilita botão novamente
})

