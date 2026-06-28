import { useState } from 'react'

function Login() {
  const [form, setForm] = useState({
    email: '',
    senha: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Login enviado', form)
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl shadow-slate-200">
        <h1 className="text-3xl font-semibold text-slate-900 text-center">Login</h1>
        <p className="mt-2 text-sm text-slate-500 text-center">Entre com seu e-mail e senha</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">E-mail</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="seu@email.com"
              required
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Senha</span>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              placeholder="Senha"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:brightness-110"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
