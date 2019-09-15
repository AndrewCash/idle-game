export default function resourcesReducter (state = {
  resources: {
    Hap: 5000,
    Fat: 1000,
    Clout: 0,
    Tech: 500,
    Money: 0
  }
}, action) {
  if (action.resource === undefined) {
    return state
  }
  switch (action.type) {
    case 'UPDATE_' + action.resource.toUpperCase(): {
      return { ...state, [action.resource]: state.resources[action.resource] + action.payload }
    } default: {
      return state
    }
  }
}
