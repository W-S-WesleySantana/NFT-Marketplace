import React, { useState } from 'react';
import type{ CartItem } from '../types';

interface CheckoutProps {
  items: CartItem[];
  onConfirmPurchase: () => void;
  onBackToCart: () => void;
}

export function Checkout({ items, onConfirmPurchase, onBackToCart }: CheckoutProps) {
  const [selectedWallet, setSelectedWallet] = useState('MetaMask');
  const [formData, setFormData] = useState({
    displayName: '',
    username: '',
    network: 'Ethereum',
    profileName: '',
    walletAddress: '',
    walletType: 'MetaMask',
    email: '',
    ensName: '',
    observation: '',
  });

  const subtotal = items.reduce((acc, item) => acc + (parseFloat(item.nft.priceEth) * item.quantity), 0);
  const networkFee = 0.016;
  const total = (subtotal + networkFee).toFixed(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmPurchase();
  };

  return (
    <div className="flex flex-col gap-12 py-6 text-zinc-100">
      
   
      <div className="flex items-center gap-2 text-xs text-zinc-500">
        <span onClick={onBackToCart} className="hover:text-white cursor-pointer">Início</span>
        <span>/</span>
        <span onClick={onBackToCart} className="hover:text-white cursor-pointer">Mercado</span>
        <span>/</span>
        <span className="text-[#D28A4C]">Pagamento</span>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
   
        <div className="lg:col-span-7 bg-[#1A110D] border border-[#2D1C14] p-8 rounded-2xl flex flex-col gap-6">
          <h3 className="text-sm font-bold text-[#F5F1EB] uppercase tracking-wider">Perfil do colecionador</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400">Nome de exibição*</label>
              <input 
                type="text" 
                required
                placeholder="Ex: Wesley Santana"
                value={formData.displayName}
                onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400">Nome de usuário*</label>
              <input 
                type="text" 
                required
                placeholder="@wesley_memo"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400">Rede*</label>
              <select 
                value={formData.network}
                onChange={(e) => setFormData({...formData, network: e.target.value})}
                className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
              >
                <option value="Ethereum">Ethereum</option>
                <option value="Polygon">Polygon</option>
                <option value="Solana">Solana</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400">Nome do perfil*</label>
              <input 
                type="text" 
                placeholder="Perfil Kurio"
                value={formData.profileName}
                onChange={(e) => setFormData({...formData, profileName: e.target.value})}
                className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400">Endereço da carteira*</label>
              <input 
                type="text" 
                required
                placeholder="0x7a42...10E8"
                value={formData.walletAddress}
                onChange={(e) => setFormData({...formData, walletAddress: e.target.value})}
                className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white font-mono text-[11px] focus:outline-none focus:border-[#D28A4C]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400">ENS ou carteira secundária (opcional)</label>
              <input 
                type="text" 
                placeholder="ex: vitalik.eth"
                value={formData.ensName}
                onChange={(e) => setFormData({...formData, ensName: e.target.value})}
                className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400">Tipo de carteira*</label>
              <select 
                value={formData.walletType}
                onChange={(e) => setFormData({...formData, walletType: e.target.value})}
                className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
              >
                <option value="MetaMask">MetaMask</option>
                <option value="WalletConnect">WalletConnect</option>
                <option value="Coinbase Wallet">Coinbase Wallet</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-zinc-400">E-mail*</label>
              <input 
                type="email" 
                required
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-xs">
            <label className="text-zinc-400">Observação do colecionador (opcional)</label>
            <textarea 
              rows={3}
              placeholder="Notas adicionais sobre a transação..."
              value={formData.observation}
              onChange={(e) => setFormData({...formData, observation: e.target.value})}
              className="bg-[#140D0A] border border-[#2D1C14] rounded-xl p-3 text-white focus:outline-none focus:border-[#D28A4C] resize-none"
            />
          </div>

        </div>

  
        <div className="lg:col-span-5 bg-[#1A110D] border border-[#2D1C14] p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-[#2D1C14] pb-3 text-xs">
            <span className="font-bold text-[#F5F1EB]">Seus NFTs</span>
            <span className="text-zinc-500">Subtotal</span>
          </div>

         
          <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
            {items.map((item) => {
              const itemTotal = (parseFloat(item.nft.priceEth) * item.quantity).toFixed(2);
              return (
                <div key={item.nft.id} className="flex items-center justify-between gap-3 bg-[#140D0A] p-3 rounded-xl border border-[#2D1C14]">
                  <div className="flex items-center gap-3">
                    <img src={item.nft.image} alt={item.nft.title} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <h5 className="font-bold text-xs text-[#F5F1EB]">{item.nft.title}</h5>
                      <span className="text-[10px] text-zinc-500">ID: #0842 &nbsp; (x{item.quantity})</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#D28A4C]">{itemTotal} ETH</span>
                </div>
              );
            })}
          </div>

      
          <div className="flex flex-col gap-2 text-xs border-t border-[#2D1C14] pt-4 text-zinc-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="text-zinc-200 font-semibold">{subtotal.toFixed(2)} ETH</span>
            </div>
            <div className="flex justify-between">
              <span>Desconto do lançamento</span>
              <span className="text-emerald-400">(-) 00.00</span>
            </div>
            <div className="flex justify-between">
              <span>Taxa de rede</span>
              <span className="text-zinc-200 font-semibold">{networkFee} ETH</span>
            </div>
            <div className="flex justify-between items-center border-t border-[#2D1C14] pt-3 text-sm font-bold text-[#F5F1EB]">
              <span>Total</span>
              <span className="text-[#D28A4C] text-base">{total} ETH</span>
            </div>
          </div>


          <div className="flex flex-col gap-3 border-t border-[#2D1C14] pt-4">
            <span className="text-xs font-bold text-[#F5F1EB]">Carteira e rede</span>
            
            <div className="flex flex-col gap-2 text-xs">
              {['MetaMask', 'WalletConnect', 'Coinbase Wallet'].map((wallet) => (
                <label 
                  key={wallet}
                  onClick={() => setSelectedWallet(wallet)}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${selectedWallet === wallet ? 'border-[#D28A4C] bg-[#D28A4C]/10 text-white' : 'border-[#2D1C14] bg-[#140D0A] text-zinc-400'}`}
                >
                  <input 
                    type="radio" 
                    name="walletSelection" 
                    checked={selectedWallet === wallet} 
                    onChange={() => setSelectedWallet(wallet)}
                    className="accent-[#D28A4C]"
                  />
                  <span className="font-semibold">{wallet}</span>
                </label>
              ))}
            </div>
          </div>

          
          <button 
            type="submit"
            className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs py-4 rounded-xl uppercase tracking-wider transition-colors cursor-pointer w-full text-center mt-2"
          >
            Confirmar compra
          </button>

        </div>

      </form>

    </div>
  );
}