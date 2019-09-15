export function buyAddiction (catagory, index) {
  return {
    type: 'BUY_ADDICTION',
    catagory: catagory,
    index: index
  }
}
