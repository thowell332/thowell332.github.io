class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="../assets/css/main.css" />
            
            <header id="header">
                <a href="index.html" class="logo"><strong>Thomas J Howell</strong></a>
                <ul class="icons">
                    <li><a href="#" class="icon brands fa-github"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-linkedin"><span class="label">Facebook</span></a></li>
                </ul>
            </header>
        `;
    }
}

customElements.define('header-component', Header);
