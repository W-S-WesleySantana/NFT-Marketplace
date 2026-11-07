import React, { useState } from 'react';
import type { CartItem } from '../types';
import { ArrowLeft, MoreVertical } from 'lucide-react';

export interface CheckoutProps {
  items: CartItem[];
  onConfirmPurchase: () => void;
  onBackToCart: () => void;
}

export function Checkout({ items, onConfirmPurchase, onBackToCart }: CheckoutProps) {
  const [selectedWallet, setSelectedWallet] = useState('MetaMask');
  const [connectedWalletOption, setConnectedWalletOption] = useState('nova.kurio.eth');
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
  const networkFee = items.length > 0 ? 0.016 : 0;
  const total = (subtotal + networkFee).toFixed(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmPurchase();
  };

  return (
    <div className="flex flex-col gap-6 md:gap-12 py-4 md:py-6 text-zinc-100 bg-[#140D0A] min-h-screen px-4 md:px-0 pb-36 md:pb-6 relative">
      

      <div className="flex md:hidden items-center justify-between relative py-2">
        <button 
          onClick={onBackToCart}
          className="bg-[#1A110D] border border-[#2D1C14] w-9 h-9 rounded-full flex items-center justify-center text-zinc-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2 className="text-sm font-bold text-[#F5F1EB] absolute left-1/2 -translate-x-1/2 tracking-wide">
          Pagamento com carteira
        </h2>
      </div>

    
      <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
        <span onClick={onBackToCart} className="hover:text-white cursor-pointer">Início</span>
        <span>/</span>
        <span onClick={onBackToCart} className="hover:text-white cursor-pointer">Mercado</span>
        <span>/</span>
        <span className="text-[#D28A4C]">Pagamento</span>
      </div>

    
      <div className="flex md:hidden flex-col gap-6 w-full">
        
     
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-xs px-1">
            <span className="text-zinc-400 font-medium">Carteira conectada</span>
            <span className="text-[#D28A4C] font-semibold cursor-pointer">Trocar carteira</span>
          </div>

          <div className="flex flex-col gap-2.5">
            
            <div 
              onClick={() => setConnectedWalletOption('nova.kurio.eth')}
              className={`bg-[#1A110D] border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all ${connectedWalletOption === 'nova.kurio.eth' ? 'border-[#D28A4C]' : 'border-[#2D1C14]'}`}
            >
              <div className="flex items-center gap-3">
                <input 
                  type="radio" 
                  checked={connectedWalletOption === 'nova.kurio.eth'} 
                  onChange={() => setConnectedWalletOption('nova.kurio.eth')}
                  className="accent-[#D28A4C]"
                />
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 font-medium">Reserva</span>
                  <span className="text-xs font-bold text-[#F5F1EB]">nova.kurio.eth</span>
                  <span className="text-[10px] text-zinc-400">Rede Polygon</span>
                </div>
              </div>
              <MoreVertical className="w-4 h-4 text-zinc-500" />
            </div>

           
            <div 
              onClick={() => setConnectedWalletOption('0xA91F...E82C')}
              className={`bg-[#1A110D] border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition-all ${connectedWalletOption === '0xA91F...E82C' ? 'border-[#D28A4C]' : 'border-[#2D1C14]'}`}
            >
              <div className="flex items-center gap-3">
                <input 
                  type="radio" 
                  checked={connectedWalletOption === '0xA91F...E82C'} 
                  onChange={() => setConnectedWalletOption('0xA91F...E82C')}
                  className="accent-[#D28A4C]"
                />
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 font-medium">Principal</span>
                  <span className="text-xs font-bold text-[#F5F1EB]">0xA91F...E82C</span>
                  <span className="text-[10px] text-zinc-400">Rede principal Ethereum</span>
                </div>
              </div>
              <MoreVertical className="w-4 h-4 text-zinc-500" />
            </div>
          </div>
        </div>

        {/* Seção Carteira e Rede */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-[#F5F1EB] px-1">Carteira e rede</span>
          
          <div className="flex flex-col gap-2.5 text-xs">
            {[
              { name: 'WalletConnect', icon: 'W' },
              { name: 'MetaMask', icon: 'M' },
              { name: 'Coinbase Wallet', icon: 'C' }
            ].map((wallet) => (
              <div 
                key={wallet.name}
                onClick={() => setSelectedWallet(wallet.name)}
                className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${selectedWallet === wallet.name ? 'border-[#D28A4C] bg-[#D28A4C]/10 text-white' : 'border-[#2D1C14] bg-[#1A110D] text-zinc-400'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#140D0A] border border-[#2D1C14] flex items-center justify-center font-bold text-[10px] text-[#D28A4C]">
                    {wallet.icon}
                  </div>
                  <span className="font-semibold text-xs text-[#F5F1EB]">{wallet.name}</span>
                </div>
                <input 
                  type="radio" 
                  name="mobileWalletSelection" 
                  checked={selectedWallet === wallet.name} 
                  onChange={() => setSelectedWallet(wallet.name)}
                  className="accent-[#D28A4C]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Total Mobile */}
        <div className="flex justify-between items-center border-t border-[#2D1C14] pt-4 px-1 text-sm font-bold mb-4">
          <span className="text-zinc-400">Total:</span>
          <span className="text-[#D28A4C] text-base">{total} ETH</span>
        </div>

      </div>

     
      <form onSubmit={handleSubmit} className="hidden md:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
    
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

        {/* RESUMO E SELEÇÃO DE CARTEIRA */}
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

     
      <div className="fixed bottom-0 left-0 right-0 bg-[#140D0A]/95 backdrop-blur-md border-t border-[#2D1C14] p-4 md:hidden z-50">
        <button 
          onClick={handleSubmit}
          className="w-full bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs py-4 rounded-2xl uppercase tracking-wider transition-colors cursor-pointer text-center shadow-2xl active:scale-[0.98]"
        >
          Confirmar compra
        </button>
      </div>

    </div>
  );
}