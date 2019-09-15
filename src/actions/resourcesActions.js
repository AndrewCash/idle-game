export function updateResources (resourceNames, deltas) {
  console.log(resourceNames)
  const output = resourceNames.reduce((acc, res, i) => {
    return {
      type: 'UPDATE_' + resourceNames[i].toUpperCase(),
      payload: deltas[i],
      resources: resourceNames[i]
    }
  }, {})

  return output
}
