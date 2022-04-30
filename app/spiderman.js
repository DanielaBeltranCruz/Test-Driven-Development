class Spiderman {
    constructor(heroname, age, actor, movies, studio){
        this.heroname = heroname
        this.age = age
        this.actor = actor
        this.movies = movies
        this.studio = studio
    }

    getInfo() {
        return `Hey, I'm ${this.actor} from ${this.studio} studio`
    }
}

module.exports = Spiderman