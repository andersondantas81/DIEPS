class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <img src="../img/LinhaRodape.png" alt="Linha Rodapé" class="w-full h-auto"></img>
            <footer class="bg-gray-100 py-4">
                <div class="container mx-auto">
                    <div class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
                        <div>
                             <!-- Este conteúdo será exibido em telas menores-->
                            <img src="../img/Coloridas.png" alt="Logos" class="block sm:hidden w-[380px] h-auto mx-auto">
                            <!-- Este conteúdo só será exibido em telas maiores que 640px (classe "sm") -->
                            <img src="../img/Coloridas.png" alt="Logos" class="hidden sm:block w-[400px] h-auto">
                        </div>
                    
                        <!-- Texto do footer -->
                        <div class="text-left text-sm text-gray-700">
                            <p>Av. Antônio Justa, 3161, Meireles - Fortaleza, CE</p>
                            <p>Email: <a href="mailto:centrodeinteligencia@esp.ce.gov.br" class="text-green-600 hover:underline">centrodeinteligencia@esp.ce.gov.br</a></p>
                            <p>Fonte: Sistema Acadêmico de Gestão Unificada (SAGU),</p>
                            <p>Diretoria de Pós Graduação em Saúde da ESP/CE</p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);


