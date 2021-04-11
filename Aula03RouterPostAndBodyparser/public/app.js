$("button[id='jquery']").on("click", (event) => {
    $("button[id='jquery']").attr("disabled","disabled")//se nao tiver isso da double click e faz a requsiição duas vezes
    const nome = $("#nome").val().trim()
    const sobrenome = $("#sobrenome").val().trim()

    const user = {
        nome,
        sobrenome
    }

    $.post("/",user,(resposta) => {
        console.log(resposta)//printa a resposta do servidor para essa requisiçao post
    })

    $("button[id='jquery']").removeAttr("disabled")//habilita botão novamente
})

