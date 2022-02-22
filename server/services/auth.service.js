export const helloService = async () => {
  try {
    // res.send('hi ')
    return 'hi '
  } catch (error) {
    throw new Error('Something bad happened.')
  }
}
