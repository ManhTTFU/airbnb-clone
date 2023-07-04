import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const { setUser } = useContext(UserContext)
    const LoginUser = async (ev) => {
        ev.preventDefault()
        try {
            const { data } = await axios.post('/login', {
                email,
                password,
            })
            setUser(data)
            alert('Login Successfuly!')
            setRedirect(true)
        } catch (error) {
            console.log(error)
            alert('Login Failed!')
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            <div className="mt-4 grow flex items-center justify-around">
                <div className="mb-64">
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    <form
                        action=""
                        className="max-w-md mx-auto"
                        onSubmit={LoginUser}
                    >
                        <input
                            type="email"
                            placeholder="your@email.com"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="primary">Login</button>
                        <div className="text-center py-2 text-gray-500">
                            Don't have an account yet?{' '}
                            <Link
                                className="underline text-bn"
                                to={'/register'}
                            >
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage
