const fs = require('fs')
const { Helper } = require('dxf')

const svg_string = new Helper(fs.readFileSync('./test.dxf').toString())

fs.writeFileSync('./test.svg', svg_string.toSVG())