//Nav bar para celular
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show'); // Alterna a classe 'show' para exibir/ocultar o menu
        });
    }
});


// Adiciona um listener para a rolagem da janela
window.addEventListener("scroll", toggleNavbar);

// Chama a função ao carregar a página para verificar a posição inicial
toggleNavbar();

function toggleNavbar() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Adiciona a classe ao rolar
    } else {
        navbar.classList.remove("scrolled"); // Remove a classe ao voltar para o topo
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        { section: document.querySelector(".welcome-container"), text: ".welcome-text", image: ".welcome-image" },
        { section: document.querySelector(".reasons-container"), text: ".reasons-text", image: ".reasons-image" },
    ];

    const handleScroll = () => {
        sections.forEach(({ section, text, image }) => {
            if (section) {
                const position = section.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;

                if (position < screenHeight - 100) {
                    section.classList.add("visible");
                }
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Garante que a animação aconteça no carregamento
});



document.addEventListener("DOMContentLoaded", () => {
    const sobreNosContainer = document.querySelector(".sobre-nos-container");

    const handleScroll = () => {
        const position = sobreNosContainer.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            sobreNosContainer.classList.add("visible");
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Garante que a animação aconteça ao carregar
});

document.querySelectorAll('.obra-bloco img').forEach(img => {
    img.addEventListener('click', () => {
        // Cria o contêiner para exibir a imagem
        const expandedImg = document.createElement('div');
        expandedImg.classList.add('expanded-image');

        // Adiciona a imagem e o botão de fechar
        expandedImg.innerHTML = `
            <img src="${img.src}" alt="${img.alt}">
            <span class="expanded-image-close">&times;</span>
        `;

        // Adiciona o contêiner ao corpo do documento
        document.body.appendChild(expandedImg);

        // Fecha a imagem ao clicar no botão de fechar ou fora da imagem
        expandedImg.addEventListener('click', (event) => {
            if (event.target.classList.contains('expanded-image') || 
                event.target.classList.contains('expanded-image-close')) {
                expandedImg.remove();
            }
        });
    });
});




document.getElementById("formOrcamento").addEventListener("submit", function (event) {
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const cidade = document.getElementById("cidade").value;
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value;

    // Número de telefone do WhatsApp (inclua o código do país, sem espaços ou símbolos)
    const whatsappNumber = "5511991823633";

    // Formatação da mensagem
    const whatsappMessage = `Olá, meu nome é ${encodeURIComponent(nome)}.%0A` +
                            `Telefone: ${encodeURIComponent(telefone)}%0A` +
                            `Email: ${encodeURIComponent(email)}%0A` +
                            `Cidade: ${encodeURIComponent(cidade)}%0A` +
                            `Serviço: ${encodeURIComponent(servico)}%0A` +
                            `Mensagem: ${encodeURIComponent(mensagem)}`;

    // URL do WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Abre o link no navegador ou no app do WhatsApp
    window.open(whatsappURL, "_blank");
});


const text = "Fale Conosco!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 120); /* Velocidade do texto */
    }
}

typeWriter();

document.getElementById("formOrcamento").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulário enviado com sucesso!");
});





document.addEventListener("DOMContentLoaded", () => {
    const contatoEsquerda = document.querySelector(".contato-esquerda");
    const handleScroll = () => {
        const position = contatoEsquerda.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            contatoEsquerda.classList.add("visible");
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});



document.addEventListener("DOMContentLoaded", () => {
    const atuacaoBlocos = document.querySelectorAll(".atuacao-bloco");

    const handleScroll = () => {
        atuacaoBlocos.forEach((bloco) => {
            const position = bloco.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 100) {
                bloco.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ativa no carregamento da página
});


