
import type{ CartItem } from '../types';
import { FiX } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  txId?: string;
  date?: string;
  walletName?: string;
}

export function SuccessModal({ 
  isOpen, 
  onClose, 
  items, 
  txId = '0xA91F...E82C', 
  date = '29 Jul, 2026', 
  walletName = 'MetaMask' 
}: SuccessModalProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + (parseFloat(item.nft.priceEth) * item.quantity), 0);
  const networkFee = 0.016;
  const total = (subtotal + (items.length > 0 ? networkFee : 0)).toFixed(3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      
      <div className="relative bg-[#140D0A] border border-[#2D1C14] rounded-2xl w-full max-w-lg p-6 flex flex-col gap-6 text-zinc-100 shadow-2xl my-8">
        
  
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors cursor-pointer"
        >
          <FiX size={18} />
        </button>

    
        <div className="flex flex-col items-center text-center gap-3 pt-2">
          <div className="w-12 h-12 rounded-xl bg-[#1A110D] border border-[#D28A4C]/40 flex items-center justify-center text-[#D28A4C] text-xl">
            <HiOutlineMailOpen />
          </div>
          <span className="text-xs font-medium text-[#F5F1EB]">Seus NFTs agora estão na sua carteira</span>
        </div>

   
        <div className="grid grid-cols-4 gap-2 bg-[#1A110D] border border-[#2D1C14] p-3.5 rounded-xl text-[11px]">
          <div className="flex flex-col">
            <span className="text-zinc-500">ID da transação</span>
            <span className="font-mono text-zinc-300 font-semibold truncate">{txId}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500">Data</span>
            <span className="text-zinc-300 font-semibold">{date}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500">Total</span>
            <span className="text-[#D28A4C] font-semibold">{total} ETH</span>
          </div>
          <div className="flex flex-col">
            <span className="text-zinc-500">Carteira</span>
            <span className="text-zinc-300 font-semibold">{walletName}</span>
          </div>
        </div>


        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-[#F5F1EB]">Detalhes da transação</span>

  
          <div className="grid grid-cols-12 text-[10px] font-bold text-zinc-500 uppercase px-1">
            <span className="col-span-7">NFTs</span>
            <span className="col-span-2 text-center">Edições</span>
            <span className="col-span-3 text-right">Subtotal</span>
          </div>

          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
            {items.map((item) => {
              const itemTotal = (parseFloat(item.nft.priceEth) * item.quantity).toFixed(2);
              return (
                <div key={item.nft.id} className="grid grid-cols-12 items-center bg-[#1A110D] border border-[#2D1C14] p-2.5 rounded-xl text-xs">
                  <div className="col-span-7 flex items-center gap-2.5">
                    <img src={item.nft.image} alt={item.nft.title} className="w-9 h-9 rounded-lg object-cover" />
                    <div className="flex flex-col truncate">
                      <span className="font-bold text-[#F5F1EB] truncate">{item.nft.title}</span>
                      <span className="text-[9px] text-zinc-500">ID do token: #0842</span>
                    </div>
                  </div>
                  <div className="col-span-2 text-center text-zinc-400 text-[11px]">
                    (x{item.quantity})
                  </div>
                  <div className="col-span-3 text-right font-bold text-[#D28A4C]">
                    {itemTotal} ETH
                  </div>
                </div>
              );
            })}
          </div>

   
          <div className="flex flex-col gap-1.5 text-xs border-t border-[#2D1C14] pt-3 text-zinc-400 px-1">
            <div className="flex justify-between">
              <span>Taxa de rede</span>
              <span className="text-zinc-200 font-semibold">0.016 ETH</span>
            </div>
            <div className="flex justify-between font-bold text-[#F5F1EB] pt-1">
              <span>Total</span>
              <span className="text-[#D28A4C]">{total} ETH</span>
            </div>
          </div>
        </div>

   
        <p className="text-[10px] text-zinc-500 text-center leading-relaxed px-4">
          Transação confirmada na Ethereum. A propriedade foi transferida para sua carteira conectada e registrada na rede.
        </p>


        <button 
          onClick={onClose}
          className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs py-3 rounded-xl uppercase tracking-wider transition-colors cursor-pointer w-full text-center"
        >
          Ver no Etherscan
        </button>

      </div>
    </div>
  );
}