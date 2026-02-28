const CapitaoAmerica = {
    nome: "Steve Rogers",
    codinome: "Capitâo América",
    armaPrincipal: "Escudo de vibranium",
    armaSecundaria: "Mjolnir",
    velocidade: 80,
    forca: 90,
    resistencia: 85,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" + 
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma pricipal do personagem: " + this.armaPrincipal + "\n" +
        "Arma secundária do personagem: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" + 
        "Resistência: " + this.resistencia

    }
}

const Thor = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Stormbreaker",
    armaSecundaria: "Mjolnir",
    velocidade: 80,
    forca: 100,
    resistencia: 95,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" + 
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma pricipal do personagem: " + this.armaPrincipal + "\n" +
        "Arma secundária do personagem: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" + 
        "Resistência: " + this.resistencia

    }
}

const IronMan = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Tecnologica",
    armaSecundaria: "Unibeam (raio no peito)",
    velocidade: 70,
    forca: 80,
    resistencia: 75,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" + 
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma pricipal do personagem: " + this.armaPrincipal + "\n" +
        "Arma secundária do personagem: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" + 
        "Resistência: " + this.resistencia

    }
}

const Hulk = {
    nome: "Bruce Benner",
    codinome: "Hulk",
    armaPrincipal: "",
    armaSecundaria: "",
    velocidade: 80,
    forca: 95,
    resistencia: 100,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" + 
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma pricipal do personagem: " + this.armaPrincipal + "\n" +
        "Arma secundária do personagem: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" + 
        "Resistência: " + this.resistencia

    }
}

const ViuvaNegra = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Bastões de Choque",
    armaSecundaria: "Glock",
    velocidade: 70,
    forca: 60,
    resistencia: 60,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" + 
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma pricipal do personagem: " + this.armaPrincipal + "\n" +
        "Arma secundária do personagem: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" + 
        "Resistência: " + this.resistencia

    }
}

const GaviaoArqueiro = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco e flecha",
    armaSecundaria: "Armas de fogo",
    velocidade: 70,
    forca: 65,
    resistencia: 65,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" + 
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma pricipal do personagem: " + this.armaPrincipal + "\n" +
        "Arma secundária do personagem: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" + 
        "Resistência: " + this.resistencia

    }
}

const Thanos = {
    nome: "Thanos",
    codinome: "",
    armaPrincipal: "Espada de Dois Gumes",
    armaSecundaria: "Manopla do Infinito",
    velocidade: 80,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return "Nome do personagem: " + this.nome + "\n" + 
        "Codinome do personagem: " + this.codinome + "\n" +
        "Arma pricipal do personagem: " + this.armaPrincipal + "\n" +
        "Arma secundária do personagem: " + this.armaSecundaria + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" + 
        "Resistência: " + this.resistencia

    }
}

const personagens = [CapitaoAmerica, Thor, IronMan, Hulk, ViuvaNegra, GaviaoArqueiro, Thanos]

personagens.forEach((p) => {

    if (p.nome !== "Thanos") {
        console.log("--- DESCRIÇÃO DO HERÓI ---")
        console.log(p.descricao())
        console.log("--------------------------------")

        if (p.forca > Thanos.forca) {
            console.log(`${p.codinome} vence Thanos em Força!`)
        }
        
        else if (p.forca < Thanos.forca) {
            console.log(`Thanos vence ${p.codinome} em Força!`)
        }
        
        else {
            console.log(`Empate em Força entre ${p.codinome} e Thanos.`)
        }

        if (p.velocidade > Thanos.velocidade) {
            console.log(`${p.codinome} vence Thanos em Velocidade!`)
        }

        else if (p.velocidade < Thanos.velocidade) {
            console.log(`Thanos vence ${p.codinome} em Velocidade!`)
        } 

        else {
            console.log(`Empate em Velocidade entre ${p.codinome} e Thanos.`)
        }

        if (p.resistencia > Thanos.resistencia) {
            console.log(`${p.codinome} vence Thanos em Resistência!`)
        }

        else if (p.resistencia < Thanos.resistencia) {
            console.log(`Thanos vence ${p.codinome} em Resistência!`)
        }

        else {
            console.log(`Empate em Resistência entre ${p.codinome} e Thanos.`)
        }

        console.log("\n")
    }
})

console.log("Thor é o melhor vingador!")