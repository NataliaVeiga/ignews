import {render, screen} from '@testing-library/react'
import{useSession} from 'next-auth/react'
//import{mocked} from 'ts-jest/utils'
import{SignInButton} from '.'
  
jest.mock('next-auth/react')
 
describe('SignInButton component',()=>{
  
  it('renders correctly when user is not authenticated',()=>{
    const useSessionMocked = jest.mocked(useSession)
   
    // sessão nula e loading falso
    useSessionMocked.mockReturnValue([null, false] as any)

    render(
      <SignInButton/>
    )

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
    
  })

  it('renders correctly when user is authenticated',()=>{
    const useSessionMocked = jest.mocked(useSession)

    useSessionMocked.mockReturnValueOnce(
      {
        data: {
          user: { name: "John Doe", 
          email: "john.doe@example.com" },
          expires: "fake-expires",
          activeSubscription: 'fake-act',
        },
        status: "authenticated",
      }
    );
      
    render(<SignInButton/>)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})