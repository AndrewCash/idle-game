export function buyAddiction (catagory, index) {
  return {
    type: 'BUY_ADDICTION',
    catagory: catagory,
    index: index
  }
}

export function dontAllowClick (catagory, index) {
  return {
    type: 'DONT_ALLOW_CLICK',
    catagory: catagory,
    index: index
  }
}

export function incrementProgressBar (catagory, index) {
  return {
    type: 'INCREMENT_PROGRESS_BAR',
    catagory: catagory,
    index: index
  }
}

export function clearProgressBar (catagory, index) {
  return {
    type: 'CLEAR_PROGRESS_BAR',
    catagory: catagory,
    index: index
  }
}
