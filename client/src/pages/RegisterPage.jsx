import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = (ev) => {
        ev.preventDefault()
        try {
            axios.post('/register', {
                name,
                email,
                password,
            })
            alert('Successfuly!')
        } catch (error) {
            alert('Failed!')
        }
    }
    return (
        <>
            <div className="mt-4 grow flex items-center justify-around">
                <div className="mb-64">
                    <h1 className="text-4xl text-center mb-4">Register</h1>
                    <form
                        action=""
                        className="max-w-md mx-auto"
                        onSubmit={registerUser}
                    >
                        <input
                            type="text"
                            placeholder="StrongTran"
                            name="name"
                            value={name}
                            onChange={(ev) => setName(ev.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="your@email.com"
                            name="email"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <button className="primary">Register</button>
                        <div className="text-center py-2 text-gray-500">
                            Already a member?
                            <Link className="underline text-bn" to={'/login'}>
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage
