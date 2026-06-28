import { useState } from 'react'
import api from '../../services/api'

function Register() {
    const [form, setForm] = useState({
        usuarioTipo: 'externo',
        usuarioNome: '',
        usuarioCpf: '',
        usuarioDesc: '',
        usuarioDatanasc: '',
        usuarioSexo: '',
        usuarioSenha: '',
        usuarioEmail: '',
        usuarioCelular: '',
        usuarioTelefone: '',
        usuarioEndereco: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm((current) => ({
            ...current,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Enviar registro', form)
        await api.post('/usuarios', form)
        

    }

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl shadow-slate-200">
                <h1 className="text-3xl font-semibold text-slate-900 text-center">Crie sua conta</h1>
                <p className="mt-2 text-sm text-slate-500 text-center">Preencha os dados abaixo para se cadastrar</p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                            <span className="text-sm font-medium text-slate-700">Nome</span>
                            <input
                                type="text"
                                name="usuarioNome"
                                value={form.usuarioNome}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                placeholder="Nome completo"
                                required
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-slate-700">CPF</span>
                            <input
                                type="text"
                                name="usuarioCpf"
                                value={form.usuarioCpf}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                placeholder="000.000.000-00"
                                required
                            />
                        </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                            <span className="text-sm font-medium text-slate-700">E-mail</span>
                            <input
                                type="email"
                                name="usuarioEmail"
                                value={form.usuarioEmail}
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
                                name="usuarioSenha"
                                value={form.usuarioSenha}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                placeholder="Senha forte"
                                required
                            />
                        </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                            <span className="text-sm font-medium text-slate-700">Sexo</span>
                            <select
                                name="usuarioSexo"
                                value={form.usuarioSexo}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                required
                            >
                                <option value="" disabled>
                                    Selecione
                                </option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-slate-700">Celular</span>
                            <input
                                type="tel"
                                name="usuarioCelular"
                                value={form.usuarioCelular}
                                onChange={handleChange}
                                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                                placeholder="(00) 90000-0000"
                                required
                            />
                        </label>
                    </div>

                    <label className="block">
                        <span className="text-sm font-medium text-slate-700">Endereço</span>
                        <input
                            type="text"
                            name="usuarioEndereco"
                            value={form.usuarioEndereco}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            placeholder="Rua, número, bairro"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="text-sm font-medium text-slate-700">Data de nascimento</span>
                        <input
                            type="date"
                            name="usuarioDatanasc"
                            value={form.usuarioDatanasc}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:brightness-110"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
