$(function(){

  $('.actionPanel').on({
    click: function (e) {
      e.preventDefault();
      var panel = $('.' + $(this).data('panel'));
      var href = $(this).attr('href');

      panel.slideToggle('slow', function(){
        if(!panel.is(":visible")){
          scrollTo(href);
        }
      });

      return false;

    }
  })
  $('li a').bind('click', function(event) {
    scrollTo($(this).attr('href'));
  });

  var scrollTo = function(elementID){
    $('html, body').animate({
        scrollTop: $(elementID).offset().top
    }, 1500);
    return false;
  }

  $('.selectItem').on({
    click: function(e){
      e.preventDefault();
      var fruit =  $(this).data('fruit');
      var title = $("#speak > h2");
      var description = $("#speak > p");

      switch (fruit) {
        case 'limao':
          title.html('Se a vida te der um limão, torça para que seja Siciliano.');
          description.html('Ma che! Sou o <stron>Limão Siciliano</stron>. Sou originário da Ásia, mas fiz minha fama na Itália, na região da Sicilia, <br>
          quando os árabes me trouxeram há muuuuuito tempo. Sou bonito, amarelo, cheiroso e cheinho de suco. No Brasil <br>
          ainda são poucos lugares que me cultivam, então aproveite para sentir todo o meu sabor nas balas DuBalaco!');

        break;
        case 'tangerina':
          title.html('Sou uma delícia, não é à toa que estou sempre dizendo hummmmmm.');
          description.html('Vim da Ásia, mas meu nome significa laranja de
          Tânger, porto no Marrocos onde eu era comercializada. No Brasil sou
          conhecida também como mexerica, poncã e laranja cravo.
          Independentemente do nome, sou rica em vitaminas A e C e sais
          minerais e quem provar também vai dizer hummmmm. ')
        break;
        case 'amora':
          title.html('amora');
          description.html('amora');
        break;
        case 'pessego':
          title.html('Sabor milenar para você curtir no seu dia a dia');
          description.html('Sou nativo da China, mas durante muito tempo
          achavam que eu era da Pérsia e me chamavam de malus persicum
          (maçã da Pérsia). Os primeiros registros do meu cultivo datam de
          20 séculos A.C. Apesar da idade, sou famoso por retardar o
          envelhecimento devido à grande quantidade de antioxidantes,
          betacaroteno e vitaminas C e B12. Tenho tudo para fazer sucesso
          com os novinhos e com os mais velhinhos.
');
        break;
        case 'maracuja':
          title.html('Olá, sou um craque brasileiro, o Maracujá');
          description.html('Nascido e criado aqui mesmo, sou, como todos,
          apaixonado pelo futebol. Isso fica evidente no meu formato de bola e
          em minhas cores. Quando não estou maduro sou verde mas, logo logo,
          fico amarelinho e pronto para me transformar em um delicioso suco.');
        break;
        case 'morango':
          title.html('Vim da França, mas moro no coração de todo mundo. ');
          description.html('Nasci na Bretanha, no noroeste da França e faço
          sucesso por onde eu passo. Minha cor vermelha e o formato de coração
          dizem muito sobre mim, afinal sou cheio de vitaminas e antioxidantes
          que fazem bem para a saúde. Infelizmente sou conhecido também como
          um dos campeões em agrotóxico, mas fique tranquilo, na Dubalaco me
          tratam com o devido respeito e posso dizer sem modéstia que, além de
          tudo, ainda sou orgânico.');
        break;

      }

    }
  })
});
