class Encriptador {
  constructor() {
    this.textarea = document.querySelector(".cajatexto");
    this.textoResultado = document.querySelector(".texto-resultado");
    this.btnEncriptar = document.querySelector(".btn-encriptar");
    this.btnDesencriptar = document.querySelector(".btn-desencriptar");
    this.btnCopiar = document.querySelector(".btn-copiar");

    this.btnEncriptar.addEventListener("click", this.encriptar.bind(this));
    this.btnDesencriptar.addEventListener("click", this.desencriptar.bind(this));
    this.btnCopiar.addEventListener("click", this.copiar.bind(this));
  }

  encriptar() {
    ocultarAdelante();
    const textoOriginal = this.textarea.value;
    const textoEncriptado = textoOriginal.replace(/e/g, "enter")
                                         .replace(/i/g, "imes")
                                         .replace(/a/g, "ai")
                                         .replace(/o/g, "ober")
                                         .replace(/u/g, "ufat");
    this.textoResultado.textContent = textoEncriptado;
  }

  desencriptar() {
    ocultarAdelante();
    const textoEncriptado = this.textarea.value;
    const textoDesencriptado = textoEncriptado.replace(/enter/g, "e")
                                             .replace(/imes/g, "i")
                                             .replace(/ai/g, "a")
                                             .replace(/ober/g, "o")
                                             .replace(/ufat/g, "u");
    this.textoResultado.textContent = textoDesencriptado;
  }

  copiar() {
    const textoCopiar = this.textoResultado.textContent;
    navigator.clipboard.writeText(textoCopiar)
      .then(() => {
        this.btnCopiar.value = "Copiado";
        setTimeout(() => {
          this.btnCopiar.value = "Copiar";
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al copiar el texto", error);
      });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const encriptador = new Encriptador();
});


function ocultarAdelante() {
  const munieco = document.querySelector(".contenedor-munieco");
  const contenedor = document.querySelector(".contenedor-parrafo");
  munieco.classList.add("ocultar");
  contenedor.classList.add("ocultar");
}
