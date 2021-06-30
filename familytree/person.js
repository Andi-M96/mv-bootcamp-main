const { moduleExpression } = require("@babel/types")
const Module = require("module")


const george = {
    name: "George VI",
    parents: [],
    function () {
        return this.parents.map(parent => parent.name).join(' & ') || "unknown"
      }
}
const elizabeth1 = {
    name: "Elizabeth I",
    parents: [],
    function () {
        return this.parents.map(parent => parent.name).join(' & ') || "unknown"
      }
}
const elizabeth2 = {
    name: "Elizabeth II",
    parents: [george, elizabeth1],
    function () {
        return this.parents.map(parent => parent.name).join(' & ') || "unknown"
      }
}
const philip = {
    name: "Philip",
    parents: [],
    function () {
        return this.parents.map(parent => parent.name).join(' & ') || "unknown"
      }
}
const charles = {
  name: "Charles",
  parents: [philip,elizabeth2],
  function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
}
const anne = {
  name: "Anne",
  parents: [philip,elizabeth2],
  function () {
      return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
}
module.exports = {anne,charles,elizabeth2}
// console.log(anne.parents)
