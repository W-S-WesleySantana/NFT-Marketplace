import React, { useState } from 'react';
import { FiUser, FiCreditCard, FiActivity, FiHeart, FiPercent, FiDownload, FiHelpCircle, FiLogOut } from 'react-icons/fi';

export function Profile() {
  const [activeMenu, setActiveMenu] = useState('Carteiras');
  
  // Estados para Dados do Perfil
  const [profileData, setProfileData] = useState({
    displayName: 'Wesley Santana',
    username: 'wesley_memo',
    email: 'contato@email.com',
    ensName: 'wesley.eth',
    walletAlias: 'MetaMask Principal',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Estados para Carteiras
  const [walletData, setWalletData] = useState({
    displayName: 'Wesley Santana',
    walletAlias: 'MetaMask Principal',
    network: 'Ethereum',
    profileName: 'Perfil Kurio',
    walletAddress: '',
    ensSecondary: '',
    walletType: 'MetaMask',
    referralCode: '',
    email: 'contato@email.com',
    ensName: 'wesley.eth',
    sameAsPrimary: false,
  });

  const menuItems = [
    { name: 'Dados do perfil', icon: <FiUser /> },
    { name: 'Carteiras', icon: <FiCreditCard /> },
    { name: 'Atividade', icon: <FiActivity /> },
    { name: 'Lista de interesse', icon: <FiHeart /> },
    { name: 'Ofertas', icon: <FiPercent /> },
    { name: 'Arquivos baixados', icon: <FiDownload /> },
    { name: 'Suporte', icon: <FiHelpCircle /> },
    { name: 'Sair', icon: <FiLogOut /> },
  ];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Informações salvas com sucesso!');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-6 text-zinc-100">
      
    
      <div className="lg:col-span-3 bg-[#1A110D] border border-[#2D1C14] rounded-2xl p-4 flex flex-col gap-2 h-fit">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider px-3 py-2">Meu perfil</h3>
        
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = activeMenu === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveMenu(item.name)}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  isActive 
                    ? 'bg-[#D28A4C]/10 text-[#D28A4C] border border-[#D28A4C]/30' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      
      <div className="lg:col-span-9 bg-[#1A110D] border border-[#2D1C14] rounded-2xl p-8 flex flex-col gap-8">
        
        {activeMenu === 'Dados do perfil' && (
          <>
            <h2 className="text-sm font-bold text-[#F5F1EB] uppercase tracking-wider border-b border-[#2D1C14] pb-4">
              Perfil do colecionador
            </h2>
            <form onSubmit={handleSave} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Nome de exibição<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="text" 
                    value={profileData.displayName}
                    onChange={(e) => setProfileData({...profileData, displayName: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Nome de usuário<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="text" 
                    value={profileData.username}
                    onChange={(e) => setProfileData({...profileData, username: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">E-mail<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Nome ENS<span className="text-[#D28A4C]">*</span></label>
                  <div className="flex bg-[#140D0A] border border-[#2D1C14] rounded-xl overflow-hidden focus-within:border-[#D28A4C]">
                    <select className="bg-transparent text-zinc-400 px-3 py-3 border-r border-[#2D1C14] focus:outline-none text-xs">
                      <option value=".eth">.eth</option>
                    </select>
                    <input 
                      type="text" 
                      value={profileData.ensName}
                      onChange={(e) => setProfileData({...profileData, ensName: e.target.value})}
                      className="bg-transparent p-3 text-white flex-1 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start pt-2">
                <button type="submit" className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs px-8 py-3.5 rounded-xl uppercase tracking-wider cursor-pointer">
                  Salvar
                </button>
              </div>
            </form>
          </>
        )}

        {activeMenu === 'Carteiras' && (
          <>
            <div className="flex justify-between items-center border-b border-[#2D1C14] pb-4">
              <div>
                <h2 className="text-sm font-bold text-[#F5F1EB] uppercase tracking-wider">Carteira principal</h2>
                <p className="text-[11px] text-zinc-500 mt-0.5">Estas carteiras ficam disponíveis no pagamento e para receber NFTs comprados.]</p>
              </div>
              <button type="button" className="text-xs text-[#D28A4C] hover:underline cursor-pointer font-semibold">
                Adicionar
              </button>
            </div>

            <form onSubmit={handleSave} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Nome de exibição<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="text" 
                    value={walletData.displayName}
                    onChange={(e) => setWalletData({...walletData, displayName: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Apelido da carteira<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="text" 
                    value={walletData.walletAlias}
                    onChange={(e) => setWalletData({...walletData, walletAlias: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Rede<span className="text-[#D28A4C]">*</span></label>
                  <select 
                    value={walletData.network}
                    onChange={(e) => setWalletData({...walletData, network: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  >
                    <option value="Ethereum">Ethereum</option>
                    <option value="Polygon">Polygon</option>
                    <option value="Solana">Solana</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Nome do perfil<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="text" 
                    value={walletData.profileName}
                    onChange={(e) => setWalletData({...walletData, profileName: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Endereço da carteira<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Endereço 0x da carteira"
                    value={walletData.walletAddress}
                    onChange={(e) => setWalletData({...walletData, walletAddress: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white font-mono text-[11px] focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">ENS ou carteira secundária (opcional)</label>
                  <input 
                    type="text" 
                    placeholder="ex: vitalik.eth"
                    value={walletData.ensSecondary}
                    onChange={(e) => setWalletData({...walletData, ensSecondary: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Tipo de carteira<span className="text-[#D28A4C]">*</span></label>
                  <select 
                    value={walletData.walletType}
                    onChange={(e) => setWalletData({...walletData, walletType: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  >
                    <option value="MetaMask">MetaMask</option>
                    <option value="WalletConnect">WalletConnect</option>
                    <option value="Coinbase Wallet">Coinbase Wallet</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Código de indicação<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="text" 
                    placeholder="Código opcional"
                    value={walletData.referralCode}
                    onChange={(e) => setWalletData({...walletData, referralCode: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">E-mail<span className="text-[#D28A4C]">*</span></label>
                  <input 
                    type="email" 
                    value={walletData.email}
                    onChange={(e) => setWalletData({...walletData, email: e.target.value})}
                    className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-zinc-400">Nome ENS<span className="text-[#D28A4C]">*</span></label>
                  <div className="flex bg-[#140D0A] border border-[#2D1C14] rounded-xl overflow-hidden focus-within:border-[#D28A4C]">
                    <select className="bg-transparent text-zinc-400 px-3 py-3 border-r border-[#2D1C14] focus:outline-none text-xs">
                      <option value=".eth">.eth</option>
                    </select>
                    <input 
                      type="text" 
                      value={walletData.ensName}
                      onChange={(e) => setWalletData({...walletData, ensName: e.target.value})}
                      className="bg-transparent p-3 text-white flex-1 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-start pt-2">
                <button type="submit" className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs px-8 py-3.5 rounded-xl uppercase tracking-wider cursor-pointer">
                  Salvar carteira
                </button>
              </div>

              
              <div className="flex flex-col gap-3 border-t border-[#2D1C14] pt-6 mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-[#F5F1EB] uppercase tracking-wider">Carteira secundária</h3>
                  <label className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={walletData.sameAsPrimary}
                      onChange={(e) => setWalletData({...walletData, sameAsPrimary: e.target.checked})}
                      className="accent-[#D28A4C]"
                    />
                    Igual à carteira principal <span className="text-[#D28A4C] font-semibold">Adicionar</span>
                  </label>
                </div>
                <p className="text-[11px] text-zinc-500">Você ainda não adicionou uma carteira secundária.</p>
              </div>

            </form>
          </>
        )}

        {activeMenu !== 'Dados do perfil' && activeMenu !== 'Carteiras' && (
          <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
            <h3 className="text-sm font-bold text-zinc-300">Secção: {activeMenu}</h3>
            <p className="text-xs text-zinc-500">Conteúdo em desenvolvimento para esta aba.</p>
          </div>
        )}

      </div>

    </div>
  );
}