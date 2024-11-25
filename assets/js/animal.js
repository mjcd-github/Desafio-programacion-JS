export class Animal {
    nombre;
    edad;
    img;
    comentarios;
    sonido;

    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    get nombre() { return this.nombre; }
    get edad() { return this.edad; }
    get img() { return this.img; }
    get comentarios() { return this.comentarios; }
    set comentarios(value) { this.comentarios = value; }
    get sonido() { return this.sonido; }

    reproducirSonido() {
        const audio = document.getElementById("player");
        audio.src = this.sonido;
        audio.play();
    }
}

export class Leon extends Animal {
    rugir() { this.reproducirSonido(); }
}

export class Lobo extends Animal {
    aullar() { this.reproducirSonido(); }
}

export class Oso extends Animal {
    grunir() { this.reproducirSonido(); }
}

export class Serpiente extends Animal {
    sisear() { this.reproducirSonido(); }
}

export class Aguila extends Animal {
    chillar() { this.reproducirSonido(); }
}
