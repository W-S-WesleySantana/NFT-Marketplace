import { useState } from 'react';

interface RegisterProps {
  onRegisterSuccess: () => void;
  onGoToLogin: () => void;
}

export function Register({ onRegisterSuccess, onGoToLogin }: RegisterProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Preencha todos os campos!');
      return;
    }
    alert('Conta criada com sucesso!');
    onRegisterSuccess();
  };

  return (
    <div className="max-w-md mx-auto px-6 py-16 flex flex-col gap-6">
      <div className="bg-[#121214] border border-[#27272a] p-8 rounded-2xl flex flex-col gap-6 shadow-xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-100">Criar Conta</h2>
          <p className="text-xs text-zinc-400 mt-1">Junte-se ao marketplace de NFTs</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-400 uppercase font-medium">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Seu nome" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#09090b] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-[#f97316]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-400 uppercase font-medium">E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#09090b] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-[#f97316]"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-400 uppercase font-medium">Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#09090b] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-[#f97316]"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-medium py-3 rounded-xl transition-colors mt-2"
          >
            Cadastrar
          </button>
        </form>

        <div className="text-center text-xs text-zinc-400 border-t border-[#27272a] pt-4">
          Já possui uma conta?{' '}
          <button onClick={onGoToLogin} className="text-[#f97316] hover:underline font-medium">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}