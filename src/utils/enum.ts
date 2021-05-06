
interface LooseObject {
  [key: string]: any
}

export const getEnumKeys = (value: object) => Object.keys(value).filter((key) => isNaN(parseInt(key)))

export const convertEnumToObject = (value: object) => {
  let obj: LooseObject = {};
  const keys = Object.keys(value).filter((key) => isNaN(parseInt(key)))
  .forEach((key, index) => {
    obj[key] = index
  })
  return obj
}