import { useState } from 'react';
import { FiX, FiEye, FiEyeOff } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string, email: string) => void;
}

export function AuthModal({ isOpen, onClose, onLoginSuccess }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const formattedName = username || email.split('@')[0];
    onLoginSuccess(formattedName.charAt(0).toUpperCase() + formattedName.slice(1), email);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-4 overflow-y-auto">
      
      
      <div className="relative bg-[#1A110D] sm:bg-[#1A110D] border-0 sm:border border-[#2D1C14] rounded-none sm:rounded-2xl w-full min-h-screen sm:min-h-0 sm:max-w-md p-6 sm:p-8 flex flex-col justify-center sm:justify-start gap-6 text-zinc-100 shadow-2xl my-auto">
        
       
        <button onClick={onClose} className="absolute top-5 right-5 text-zinc-500 hover:text-white cursor-pointer z-10">
          <FiX size={20} />
        </button>

        <div className="flex sm:hidden flex-col items-center gap-2 pt-4 pb-2">
          <h1 className="text-3xl font-mono font-extrabold tracking-widest text-[#F5F1EB]">KURIO</h1>
        </div>

  
        <div className="hidden sm:flex justify-center gap-8 border-b border-[#2D1C14] pb-3 text-xs font-bold">
          <button onClick={() => setIsSignUp(false)} className={`cursor-pointer ${!isSignUp ? 'text-[#D28A4C] border-b-2 border-[#D28A4C] pb-3 -mb-3.5' : 'text-zinc-500'}`}>Entrar</button>
          <button onClick={() => setIsSignUp(true)} className={`cursor-pointer ${isSignUp ? 'text-[#D28A4C] border-b-2 border-[#D28A4C] pb-3 -mb-3.5' : 'text-zinc-500'}`}>Criar conta</button>
        </div>


        <h2 className="sm:hidden text-center text-lg font-mono font-bold text-[#F5F1EB] mt-0 mb-1">
          {isSignUp ? 'Criar perfil de colecionador' : 'Entrar'}
        </h2>

 
        <p className="hidden sm:block text-xs text-zinc-400 text-center">
          {isSignUp ? 'Crie seu perfil de colecionador e conecte uma carteira.' : 'Entre para gerenciar sua carteira e coleção.'}
        </p>

        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
         
          {isSignUp && (
            <input 
              type="text" 
              required={isSignUp}
              placeholder="Nome de usuário" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#1A110D] border border-[#2D1C14] rounded-2xl sm:rounded-xl p-4 sm:p-3 text-xs text-white focus:outline-none focus:border-[#D28A4C] font-mono placeholder:text-zinc-600"
            />
          )}

          <input 
            type="email" 
            required 
            placeholder="contato@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#1A110D] border border-[#2D1C14] rounded-2xl sm:rounded-xl p-4 sm:p-3 text-xs text-white focus:outline-none focus:border-[#D28A4C] font-mono placeholder:text-zinc-600"
          />

          <div className="relative">
            <input 
              type={showPassword ? 'text' : 'password'} 
              required 
              placeholder="************" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#1A110D] border border-[#2D1C14] rounded-2xl sm:rounded-xl p-4 sm:p-3 pr-10 text-xs text-white focus:outline-none focus:border-[#D28A4C] font-mono placeholder:text-zinc-600"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 sm:top-3.5 text-zinc-500 hover:text-white cursor-pointer">
              {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
            </button>
          </div>

         
          {!isSignUp && (
            <div className="flex justify-end -mt-2">
              <span onClick={() => alert('Função de recuperação de senha')} className="text-[11px] font-mono text-[#D28A4C] hover:underline cursor-pointer">
                Esqueceu a senha?
              </span>
            </div>
          )}

          
          {isSignUp && (
            <div className="relative">
              <input 
                type={showConfirmPassword ? 'text' : 'password'} 
                required={isSignUp}
                placeholder="Confirmar senha" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#1A110D] border border-[#2D1C14] rounded-2xl sm:rounded-xl p-4 sm:p-3 pr-10 text-xs text-white focus:outline-none focus:border-[#D28A4C] font-mono placeholder:text-zinc-600"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-4 sm:top-3.5 text-zinc-500 hover:text-white cursor-pointer">
                {showConfirmPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          )}

          <button type="submit" className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-mono font-bold text-xs py-4 sm:py-3 rounded-2xl sm:rounded-xl uppercase cursor-pointer w-full mt-2 transition-colors">
            {isSignUp ? 'Criar perfil' : 'Entrar'}
          </button>
        </form>

     
        <div className="flex items-center gap-4 my-1">
          <div className="flex-1 h-px bg-[#2D1C14]"></div>
          <span className="text-[11px] font-mono text-zinc-500">Ou continue com</span>
          <div className="flex-1 h-px bg-[#2D1C14]"></div>
        </div>

      
        <div className="flex flex-col gap-3 text-xs">
          <button onClick={() => { onLoginSuccess('Google User', 'google@mail.com'); onClose(); }} className="flex items-center justify-center gap-3 bg-[#1A110D] border border-[#2D1C14] py-3.5 sm:py-3 rounded-2xl sm:rounded-xl text-zinc-300 font-mono cursor-pointer hover:bg-zinc-900 transition-colors">
            <FcGoogle size={18} /> Continuar com Google
          </button>
          <button onClick={() => { onLoginSuccess('Facebook User', 'fb@mail.com'); onClose(); }} className="flex items-center justify-center gap-3 bg-[#1A110D] border border-[#2D1C14] py-3.5 sm:py-3 rounded-2xl sm:rounded-xl text-zinc-300 font-mono cursor-pointer hover:bg-zinc-900 transition-colors">
            <BsFacebook size={18} className="text-blue-500" /> Continuar com Facebook
          </button>
        </div>

     
        <div className="flex sm:hidden justify-center items-center pt-2">
          {!isSignUp ? (
            <button 
              onClick={() => setIsSignUp(true)}
              className="text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
            >
              Novo na Kurio? <span className="text-[#F5F1EB] font-bold">Crie uma conta</span>
            </button>
          ) : (
            <button 
              onClick={() => setIsSignUp(false)}
              className="text-xs font-mono text-zinc-400 hover:text-white cursor-pointer"
            >
              Já tem uma conta? <span className="text-[#F5F1EB] font-bold">Entre</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}