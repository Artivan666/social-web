export const updateObjectInArray = (
  array,
  itemId,
  objPropName,
  newObjProps
) => {
  return array.map((i) => {
    if (i[objPropName] === itemId) {
      return { ...i, ...newObjProps }
    }
    return i
  })
}
