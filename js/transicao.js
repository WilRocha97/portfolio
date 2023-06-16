const link = document.getElementsByClassName("cabecalho__menu__link");
const links = Array.from(link);
const conteudo = document.getElementById('apresentacaoConteudo');

// adiciona um fade in ao abrir o site
setTimeout(()=> {
    document.body.classList.add('fadeIn')
}, 500);


// para cada botão no cabeçalho pega o nome do botão ao clica-lo para selecionar o conteúdo certo que devera ser exibido na página
links.forEach((element) => {
    element.addEventListener('click', (e)=> {
        e.preventDefault();
        const pagina = e.srcElement.id

        // desaparece o conteúdo atual
        conteudo.classList.remove('fadeIn');
        conteudo.classList.add('fadeOut');

        // sobe para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Para uma rolagem suave, adicione essa opção
        });

        // atualiza o conteúdo da página ainda invisível, aguarda 200 milesegundos e aparece o novo conteudo
        setTimeout(()=> {
            atualiza(pagina)

            conteudo.classList.remove('fadeOut');
            conteudo.classList.add('fadeIn');
        }, 200);
    })

    function atualiza(pagina) {

        if (pagina === 'home') {
            conteudo.innerHTML = `<h1 class="apresentacao__conteudo__titulo">Olá! Meu nome é <strong class="titulo-destaque">Willian Rodrigues</strong>, sou desenvolvedor Front-end</h1>
                                    <br>
                                    <ul class="apresentacao__conteudo__texto">
                                        <li>Python</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                        <li>HTML</li>
                                    </ul>
                                    <br>`
            return conteudo
        }

        if (pagina === 'sobre') {
            conteudo.innerHTML = `<h1 class="titulo-destaque">Sobre mim</h1>
                                    <p class="apresentacao__conteudo__texto">Meu nome completo é Willian Rocha Barquilia Rodrigues, 
                                        tenho 26 anos e sou natural de Valinhos - SP, nasci e moro aqui até hoje!</p>
                                    <p class="apresentacao__conteudo__texto">Antes de começar o meu primeiro emprego, tentei fazer uma graduação em jogos digitais. 
                                        Sempre fui apaixonado por videogames e fico fascinado em como eles fazem voçê se sentir parte de mundos e histórias 
                                        incríveis. Infelizmente, não deu certo mas acabei conseguindo um emprego como auxiliar de escritório. Algum tempo depois, 
                                        o líder do meu setor decidiu automatizar alguns processos do escritório. Então, junto com um desenvolvedor, comecei a 
                                        desenvolver processos automatizados de uma maneira mais simples, usando uma ferramenta para criar esses scripts. Conforme a 
                                        demanda foi crescendo, precisamos ampliar e tornar os scripts mais complexos. Foi nesse momento que comecei a estudar 
                                        Python para desenvolvê-los e comecei a gostar de programação. Agora, estou estudando Front-end e amando, e este é o 
                                        meu primeiro site!
                                    </p>`
            return conteudo
        }

        if (pagina === 'curriculo') {
            conteudo.innerHTML = `<h1 class="titulo-destaque">Idiomas</h2>
                                    <ul class="apresentacao__conteudo__texto">
                                        <li>Português - BR</li>
                                        <li>English - US (Pre-advanced)</li>
                                    </ul>
                                    <h2 class="titulo-destaque">Experiências</h2>
                                    <ul class="apresentacao__conteudo__texto">
                                        <li>Veiga & Postal<br>(2015 - Presente)<br>Desenvolvendo scripts para automação de processos via python</li>
                                    </ul>
                                    <h3 class="titulo-destaque">Formação</h3>
                                    <ul class="apresentacao__conteudo__texto">
                                        <li>UNIP Universidade Paulista<br>(02/2018 - 07/2020) Não concluído<br>Bacharel em Ciências da Computação</li>
                                    </ul>
                                    <h4 class="titulo-destaque">Cursos</h4>
                                    <ul class="apresentacao__conteudo__texto">
                                        <li>Alura<br>
                                            Acesse meu <a class="link__padrao" href="https://cursos.alura.com.br/user/willrbr1997" target="_blank" rel="noopener noreferrer">perfil</a> e veja todos os meus curos concluídos!
                                        </li>
                                    </ul>`
            return conteudo
        }
    }
});
