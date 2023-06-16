import React from 'react'
import { loginRequest, profileRequest } from '../api/auth'
import {useAuthStore} from '../store/auth'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate()

    const setToken = useAuthStore(state => state.setToken)

   const setProfile = useAuthStore(state => state.setProfile)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value

        const resLogin =   await loginRequest(email, password)
        setToken(resLogin.data.token)

       const resProfile = await profileRequest()
       setProfile(resProfile.data.profile)
       
         navigate('/profile')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="mail" placeholder='email' />
                <input type="pasword" placeholder='***' />
                <button>Login</button>

            </form>
        </div>
    )
}

export default LoginPage