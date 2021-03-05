const TinyColor = require('tinycolor2')

module.exports = (color) => {
  const data = TinyColor(color).toRgb()
  const f = (v, a) => Math.round(255 - a * (255 - v))
  const toHex = v => v.toString(16).padStart(2, 0)

  data.r = f(data.r, data.a)
  data.g = f(data.g, data.a)
  data.b = f(data.b, data.a)
  data.a = 1

  return `#${toHex(data.r)}${toHex(data.g)}${toHex(data.b)}`
}
