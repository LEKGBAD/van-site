import { createServer,Model } from "miragejs"

export default function server (){
createServer({
  models: {
    movie: Model,
  },

  routes() {
    this.namespace = "api"

    this.get("/movies", (schema, request) => {
      console.log("received");
      return schema.movies.all()
    })
  },

  seeds(server) {
    server.create("movie", { name: "Inception", year: 2010 })
    server.create("movie", { name: "Interstellar", year: 2014 })
    server.create("movie", { name: "Dunkirk", year: 2017 })
  },
})
}