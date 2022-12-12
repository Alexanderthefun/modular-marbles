const { createMarble } = require("./marbleMaker.js")
const { weaveBag } = require("./bagMaker.js")


const marble = createMarble("gigantic")
console.log(marble)
const bag = weaveBag("fleshy")
console.log(bag)