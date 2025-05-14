import { drawGraph } from "./drawGraph.js"; // ou copie la fonction

export class GaugeGraph extends HTMLElement {
    static get observedAttributes() {
        return ["value"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        const value = Number(this.getAttribute("value") || 0);
        this.innerHTML = ""; // reset
        const canvas = document.createElement("canvas");
        canvas.width = 200;
        canvas.height = 100;
        this.appendChild(canvas);
        drawGraph(canvas, value);
    }
}
customElements.define("gauge-graph", GaugeGraph);
