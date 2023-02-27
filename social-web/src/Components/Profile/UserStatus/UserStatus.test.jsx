import { create } from 'react-test-renderer'
import { UserStatus } from './UserStatus'

describe('Profile status', () => {
  // for class component!!!!

  test('Status from state', () => {
    const component = create(<UserStatus userStatus="Hello world!" />)
    const instace = component.getInstance()
    expect(instace.state.userStatus).toBe('Hello world!')
  })

  test('Span with status should be display', async () => {
    const component = create(<UserStatus userStatus="Hello world!" />)
    let instace = component.getInstance()
    let span = await instace.findByType('span')
    expect(span.length).toBe(1)
  })
})
