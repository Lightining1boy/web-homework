import data from './src/fakeData'

test('should render with no error', () => {
  expect(data.history.length).toBe(3)
})
