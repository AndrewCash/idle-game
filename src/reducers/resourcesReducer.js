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
    case 'UPDATE_RESOURCES': {
      const prevState = { ...state }
      for (let i = 0; i < action.resources.length; i++) {
        prevState.resourcesReducer[action.resources[i]] = state.resourcesReducer.resources[action.resources[i]] + action.payload[i]
      }
      return prevState
    } default: {
      return state
    }
  }
}
