import { useState } from 'react';
import type { CartItem } from '../types';
import { FiTrash2 } from 'react-icons/fi';
import { ArrowLeft, Home, Heart, ShoppingCart, User, Compass } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export function Cart({ items, onRemove, onCheckout, onContinueShopping }: CartProps) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = items.reduce((acc, item) => acc + (parseFloat(item.nft.priceEth) * item.quantity), 0);
  const networkFee = items.length > 0 ? 0.016 : 0;
  const total = Math.max(0, subtotal - discount + networkFee).toFixed(3);

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'KURIO10') setDiscount(5.00);
    else alert('Código promocional inválido (tente KURIO10)');
  };

  return (
    <div className="flex flex-col gap-6 md:gap-12 py-4 md:py-6 text-zinc-100 bg-[#140D0A] min-h-screen px-4 md:px-0 pb-28 md:pb-6">
      

      <div className="flex md:hidden items-center justify-between relative py-2">
        <button 
          onClick={onContinueShopping}
          className="bg-[#1A110D] border border-[#2D1C14] w-9 h-9 rounded-full flex items-center justify-center text-zinc-300 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h2 className="text-sm font-bold text-[#F5F1EB] absolute left-1/2 -translate-x-1/2 tracking-wide">
          Carrinho de NFTs
        </h2>
      </div>


      <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
        <span onClick={onContinueShopping} className="hover:text-white cursor-pointer">Início</span>
        <span>/</span>
        <span onClick={onContinueShopping} className="hover:text-white cursor-pointer">Mercado</span>
        <span>/</span>
        <span className="text-[#D28A4C]">Carrinho</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        

        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="hidden sm:grid grid-cols-12 text-[11px] font-bold text-zinc-500 uppercase pb-2 border-b border-[#2D1C14] px-2">
            <span className="col-span-5">NFTs</span>
            <span className="col-span-3 text-center">Preço</span>
            <span className="col-span-2 text-center">Edições</span>
            <span className="col-span-2 text-right">Total</span>
          </div>

          {items.length === 0 ? (
            <div className="bg-[#1A110D] border border-[#2D1C14] rounded-3xl p-8 text-center flex flex-col gap-4 items-center">
              <p className="text-sm text-zinc-400">O seu carrinho está vazio.</p>
              <button onClick={onContinueShopping} className="bg-[#D28A4C] text-[#140D0A] text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer">
                Explorar Mercado
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item) => {
                const itemTotal = (parseFloat(item.nft.priceEth) * item.quantity).toFixed(2);
                return (
                  <div key={item.nft.id} className="flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center bg-[#1A110D] border border-[#2D1C14] p-3.5 sm:p-4 rounded-2xl gap-3 sm:gap-2 shadow-lg">
                    
    
                    <div className="w-full sm:col-span-5 flex items-center justify-between sm:justify-start gap-3">
                      <div className="flex items-center gap-3">
                        <img src={item.nft.image} alt={item.nft.title} className="w-14 h-14 sm:w-14 sm:h-14 rounded-xl object-cover border border-[#2D1C14]" />
                        <div className="flex flex-col gap-0.5">
                          <h4 className="font-bold text-xs text-[#F5F1EB]">{item.nft.title}</h4>
                          <span className="text-[10px] text-zinc-500">Edição: 1/50</span>
                          <span className="sm:hidden text-xs font-bold text-[#D28A4C] mt-0.5">{item.nft.priceEth} ETH</span>
                        </div>
                      </div>

                      <button onClick={() => onRemove(item.nft.id)} className="sm:hidden text-zinc-500 hover:text-red-400 cursor-pointer p-2">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="hidden sm:flex sm:col-span-3 justify-center text-xs text-zinc-300">
                      <span>{item.nft.priceEth} ETH</span>
                    </div>

                  
                    <div className="w-full sm:w-auto sm:col-span-2 flex justify-between sm:justify-center items-center text-xs border-t sm:border-t-0 border-[#2D1C14] pt-2 sm:pt-0">
                      <span className="sm:hidden text-[11px] text-zinc-500">Quantidade</span>
                      <div className="flex items-center gap-3 bg-[#140D0A] border border-[#2D1C14] px-3 py-1.5 rounded-xl">
                        <span className="text-zinc-500 font-bold cursor-pointer">-</span>
                        <span className="text-zinc-200 font-bold">{item.quantity}</span>
                        <span className="text-zinc-400 font-bold cursor-pointer">+</span>
                      </div>
                    </div>

     
                    <div className="hidden sm:flex sm:col-span-2 justify-end items-center text-xs font-bold text-[#D28A4C]">
                      <div className="flex items-center gap-4">
                        <span>{itemTotal} ETH</span>
                        <button onClick={() => onRemove(item.nft.id)} className="text-zinc-500 hover:text-red-400 cursor-pointer text-sm">
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>


        <div className="lg:col-span-4 bg-[#1A110D] border border-[#2D1C14] p-5 sm:p-6 rounded-3xl flex flex-col gap-5 shadow-2xl">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Digite o código promocional..." 
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="bg-[#140D0A] border border-[#2D1C14] px-3.5 py-2.5 rounded-2xl text-xs flex-1 text-white focus:outline-none focus:border-[#D28A4C] placeholder:text-zinc-600"
            />
            <button onClick={handleApplyPromo} className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs px-4 py-2.5 rounded-2xl cursor-pointer transition-colors">
              Aplicar
            </button>
          </div>

          <div className="flex flex-col gap-2.5 text-xs border-t border-[#2D1C14] pt-4 text-zinc-400">
            <div className="flex justify-between"><span>Subtotal</span><span className="text-zinc-200 font-semibold">{subtotal.toFixed(2)} ETH</span></div>
            <div className="flex justify-between">
              <span>Desconto do lançamento</span>
              <span className="text-emerald-400">(-) {discount.toFixed(2)}0 ETH</span>
            </div>
            <div className="flex flex-col gap-0.5 border-t border-[#2D1C14]/50 pt-2">
              <div className="flex justify-between">
                <span>Taxa de rede</span>
                <span className="text-zinc-200 font-semibold">{networkFee.toFixed(3)} ETH</span>
              </div>
              <span className="text-[10px] text-zinc-600">Taxa estimada</span>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-[#2D1C14] pt-4 text-sm font-bold text-[#F5F1EB]">
            <span>Total</span>
            <span className="text-[#D28A4C] text-base">{total} ETH</span>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button 
              onClick={onCheckout}
              disabled={items.length === 0}
              className={`w-full font-bold text-xs py-3.5 rounded-2xl uppercase tracking-wider cursor-pointer shadow-lg ${items.length === 0 ? 'bg-zinc-800 text-zinc-500' : 'bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] transition-colors'}`}
            >
              Conectar e finalizar
            </button>
            <button onClick={onContinueShopping} className="hidden sm:block text-center text-xs text-zinc-400 hover:text-white cursor-pointer">
              Continuar explorando
            </button>
          </div>
        </div>

      </div>


      <div className="fixed bottom-0 left-0 right-0 bg-[#140D0A]/95 backdrop-blur-md border-t border-[#2D1C14] px-6 py-3 flex items-center justify-between md:hidden z-50">
        <button onClick={onContinueShopping} className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1 cursor-pointer">
          <Home className="w-5 h-5" />
        </button>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1 cursor-pointer">
          <Heart className="w-5 h-5" />
        </button>
        <div className="relative -top-5">
          <div onClick={onContinueShopping} className="w-14 h-14 rounded-full bg-[#D28A4C] border-4 border-[#140D0A] flex items-center justify-center shadow-lg text-[#140D0A] cursor-pointer">
            <Compass className="w-6 h-6" />
          </div>
        </div>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1 cursor-pointer">
          <ShoppingCart className="w-5 h-5 text-[#D28A4C]" />
        </button>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1 cursor-pointer">
          <User className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}