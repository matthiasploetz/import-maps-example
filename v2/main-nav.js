const template = document.createElement('template')
template.innerHTML = `
    <style>
        nav {
            background-color: lightcyan;
            padding: 1rem;
        }
        ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            gap: 2ch;
        }
        a,
        a:visited{
            color: #333;
            text-decoration: none;
            cursor: pointer;
        }
    </style>
    <nav>
        <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./contact.html">Contact</a></li>        
        </ul>
    </nav>
`

export default class MainNav extends HTMLElement{
    constructor() {
        super();

        const templateContent = template.content
        const clone = templateContent.cloneNode(true)

        const shadowRoot = this.attachShadow({ mode: 'open'})
        shadowRoot.appendChild(clone)
    }
}

customElements.define('main-nav', MainNav)