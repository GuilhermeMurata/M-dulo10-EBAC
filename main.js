
$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay: true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('#CPF').mask('000.000.000-00')

    $('#CEP').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            CEP: {
                required: true
            },
            endereco: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo'
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfinvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
