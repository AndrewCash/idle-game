export default function resourcesReducer (state = {
  resources: {
    Hap: 5000,
    Fat: 1000,
    Clout: 0,
    Tech: 500,
    Money: 0
  }
}, action) {
  switch (action.type) {
    case 'UPDATE_RESOURCES': {
      const nextState = JSON.parse(JSON.stringify(state))
      for (let i = 0; i < action.resources.length; i++) {
        nextState.resources[action.resources[i]] += action.payload[i]
      }
      return nextState
    } default: {
      return state
    }
  }
}
