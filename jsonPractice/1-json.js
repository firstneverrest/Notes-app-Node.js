// Example of how to read file, change data and write file with JSON.
const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Chitsanupong"
data.age = 20

const dataNewJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataNewJSON)




