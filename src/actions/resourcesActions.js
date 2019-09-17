export function updateResources (resourceNames, deltas) {
  return {
    type: 'UPDATE_RESOURCES',
    payload: deltas,
    resources: resourceNames
  }
}
