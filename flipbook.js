//vira a pagina quando clica nos botoes next e prev
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    // função de clique para cada botao
    el.onclick = () => {
        // obtem o valor do atributo data-page do botão, que indica a página associada ao botão.
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        // se a classe turn estiver presente no elemento
        if (pageTurn.classList.contains('turn')) {
            // ela é removida
            pageTurn.classList.remove('turn');
            // temporizador que define o estilo zIndex do elemento da página que se ajusta com base no índice do botão.
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            // se nao, a classe turn é acionada
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
})

//função para executar os botoes
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.end');

contactMeBtn.onclick = () => {
    // itera cada page no conjuto de paginas selecionada
    pages.forEach((page, index) => {
        // temporizador para que cada pagina vire em momento especifico 
        setTimeout(() => {
            page.classList.add('turn');

            // atraso de um segundo para alterar a propriedade zIndex, controlando a ordem de empilhamento das páginas para garantir que fiquem sobrepostas corretamente
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
            
            //  tempo de atraso é calculado dinamicamente com base no índice da página
        }, (index +1) * 200 + 100)
    })
}

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reserveIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages -1;
    }
}

//back profile button when clock 
const backProfileBtn = document.querySelector('.back-profile');

// clicar no botao a pagina vokta para tras
backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout( () => {
            reserveIndex();
            pages[pageNumber].classList.remove('turn');
            
            setTimeout( () => {
                reserveIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

//opening animation  
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation (cover right aniimation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = 0;
}, 2800)

//opening animation (page left on profile pagss aniimation)
setTimeout(() => {
 pageLeft.style.zIndex = 20;
}, 3200)

//opening animation (all page right aniimation)
pages.forEach((_, index) => {
    setTimeout( () => {
        reserveIndex();
        pages[pageNumber].classList.remove('turn');
        
        setTimeout( () => {
            reserveIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1) * 200 + 2100)
})