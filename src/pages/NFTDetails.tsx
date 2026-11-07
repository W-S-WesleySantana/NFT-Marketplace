import { useState } from 'react';
import type { NFT } from '../types';
import { ShoppingCart, ArrowLeft, Heart,  Home, User, Compass } from 'lucide-react';

interface NftDetailsProps {
  nft: NFT;
  onAddToCart: (nft: NFT) => void;
  onBack: () => void;
  onSelectOtherNft?: (id: string) => void;
}

export function NftDetails({ nft, onAddToCart, onBack, onSelectOtherNft }: NftDetailsProps) {
  // Miniaturas empilhadas na esquerda (visível no desktop)
  const thumbnails = [
    nft.image || 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500',
    'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500',
    'https://images.unsplash.com/photo-1563089145-599997674d42?w=500',
  ];

  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details');
  const [selectedEdition, setSelectedEdition] = useState('1/50');

  // NFTs recomendados na seção "Mais desta coleção"
  const moreFromCollection = [
    { id: '4', title: 'Cosmic Bloom #118', priceEth: '1.29', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500' },
    { id: '5', title: 'Violet Nomad #014', priceEth: '1.39', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500' },
    { id: '6', title: 'Ivory Baron #888', priceEth: '1.79', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500' },
    { id: '7', title: 'Golden Beast #207', priceEth: '0.99', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500' },
    { id: '8', title: 'Golden Signal #168', priceEth: '0.39', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500' },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-10 py-4 md:py-6 text-zinc-100 bg-[#140D0A] min-h-screen px-4 md:px-0 pb-28 md:pb-6">
      
    
      <div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
        <span onClick={onBack} className="hover:text-white cursor-pointer">Início</span>
        <span>/</span>
        <span className="text-[#D28A4C]">Mercado</span>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        
   
        <div className="hidden lg:flex lg:col-span-2 flex-col gap-3">
          {thumbnails.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`w-full aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all bg-[#140D0A] ${selectedImage === img ? 'border-[#D28A4C]' : 'border-[#2D1C14] opacity-60 hover:opacity-100'}`}
            >
              <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      
        <div className="col-span-1 lg:col-span-5 relative w-full aspect-square rounded-3xl overflow-hidden border border-[#2D1C14] bg-[#1A110D] group shadow-2xl">
          <img src={selectedImage} alt={nft.title} className="w-full h-full object-cover" />
          
   
          <button 
            onClick={onBack}
            className="absolute top-4 left-4 md:hidden bg-[#140D0A]/60 backdrop-blur-md w-9 h-9 rounded-full border border-[#2D1C14] text-zinc-300 flex items-center justify-center hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          
          <button className="absolute top-4 right-4 md:hidden bg-[#140D0A]/60 backdrop-blur-md w-9 h-9 rounded-full border border-[#2D1C14] text-zinc-300 flex items-center justify-center hover:text-white cursor-pointer">
            <Heart className="w-4 h-4" />
          </button>

      
          <button className="hidden md:flex absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-[#2D1C14] text-zinc-300 hover:text-white items-center justify-center">
            🔍
          </button>
        </div>

       
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-4 md:gap-5 bg-[#1A110D] md:bg-transparent border border-[#2D1C14] md:border-none p-5 md:p-0 rounded-3xl">
          
         
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#F5F1EB]">{nft.title}</h1>
            <div className="flex items-center gap-1.5 bg-[#2D1C14]/60 md:bg-transparent px-2.5 py-1 md:p-0 rounded-full text-xs text-zinc-400">
              <span className="text-[#D28A4C] flex items-center gap-1 font-bold">★ 4.8</span>
              <span className="text-zinc-400">(19)</span>
            </div>
          </div>

          {/* Preço ) */}
          <div className="flex md:hidden items-center justify-between mt-1">
            <span className="text-xs text-zinc-500">Preço atual</span>
            <span className="text-xl font-bold text-[#D28A4C]">{nft.priceEth} ETH</span>
          </div>

          {/* Descrição curta */}
          <div className="flex flex-col gap-1 border-t border-[#2D1C14] pt-3 md:pt-4">
            <p className="text-xs text-zinc-400 leading-relaxed">
              Um colecionável digital 1/50 finalizado à mão da coleção Kurio Editions, verificado na Ethereum.
            </p>
          </div>

          {/* Opções de Edição */}
          <div className="flex flex-col gap-2 border-t border-[#2D1C14] pt-3 md:pt-4">
            <h4 className="text-xs font-bold text-[#F5F1EB]">Edição:</h4>
            <div className="flex gap-2 text-xs overflow-x-auto no-scrollbar">
              {['1/10', '1/10', '1/50', 'ABERTA'].map((ed, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedEdition(ed)}
                  className={`px-3 py-1.5 rounded-full border text-xs cursor-pointer font-medium transition-colors shrink-0 ${selectedEdition === ed ? 'border-[#D28A4C] bg-[#D28A4C]/10 text-[#D28A4C]' : 'border-[#2D1C14] text-zinc-400 hover:text-white'}`}
                >
                  {ed}
                </button>
              ))}
            </div>
          </div>

          {/* Metadados Técnicos */}
          <div className="flex flex-col gap-1.5 border-t border-[#2D1C14] pt-3 md:pt-4 text-xs text-zinc-400">
            <div><strong className="text-zinc-300">ID do token:</strong> #0042</div>
            <div><strong className="text-zinc-300">Coleção:</strong> Kurio Apes</div>
            <div><strong className="text-zinc-300">Atributos:</strong> Óculos, Esmeralda, Raro</div>
            <div className="hidden md:flex items-center gap-2 mt-2">
              <strong className="text-zinc-300">Compartilhar este NFT:</strong>
              <span className="cursor-pointer hover:text-white">in</span>
              <span className="cursor-pointer hover:text-white">✉</span>
              <span className="cursor-pointer hover:text-white">🐦</span>
            </div>
          </div>

          
          <div className="flex flex-col gap-4 border-t border-[#2D1C14] pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-400 font-medium">Qtd.</span>
                <div className="flex items-center bg-[#140D0A] border border-[#2D1C14] rounded-xl px-2.5 py-1.5 text-xs gap-3">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-zinc-400 hover:text-white font-bold cursor-pointer">-</button>
                  <span className="font-bold text-[#F5F1EB] px-1">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-zinc-400 hover:text-white font-bold cursor-pointer">+</button>
                </div>
              </div>
              <span className="hidden md:block text-2xl font-bold text-[#D28A4C]">{nft.priceEth} ETH</span>
              <span className="md:hidden text-lg font-bold text-[#D28A4C]">{(parseFloat(nft.priceEth) * quantity).toFixed(2)} ETH</span>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => onAddToCart({ ...nft, priceEth: (parseFloat(nft.priceEth) * quantity).toFixed(2) })}
                className="flex-1 bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs py-3.5 rounded-2xl transition-colors cursor-pointer uppercase tracking-wider text-center shadow-lg"
              >
                Comprar NFT
              </button>

              <button className="border border-[#2D1C14] bg-[#140D0A] hover:bg-zinc-800 p-3 rounded-2xl cursor-pointer text-zinc-300 flex items-center justify-center shrink-0">
                <ShoppingCart className="w-5 h-5 text-[#D28A4C]" />
              </button>

              <button className="hidden md:flex border border-[#2D1C14] bg-[#1A110D] hover:bg-zinc-800 text-xs px-4 py-3 rounded-xl cursor-pointer text-zinc-300 items-center gap-1.5">
                ♡ Favoritar
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. ABAS DE INFORMAÇÕES DETALHADAS  */}
      <div className="hidden md:flex flex-col gap-6 border-t border-[#2D1C14] pt-8">
        <div className="flex gap-8 border-b border-[#2D1C14] pb-3 text-xs font-bold">
          <span 
            onClick={() => setActiveTab('details')}
            className={`cursor-pointer pb-3 -mb-3 transition-colors ${activeTab === 'details' ? 'text-[#D28A4C] border-b-2 border-[#D28A4C]' : 'text-zinc-500 hover:text-white'}`}
          >
            Detalhes do NFT
          </span>
          <span 
            onClick={() => setActiveTab('reviews')}
            className={`cursor-pointer pb-3 -mb-3 transition-colors ${activeTab === 'reviews' ? 'text-[#D28A4C] border-b-2 border-[#D28A4C]' : 'text-zinc-500 hover:text-white'}`}
          >
            Avaliações de colecionadores (19)
          </span>
        </div>

        {activeTab === 'details' ? (
          <div className="flex flex-col gap-4 text-xs text-zinc-400 max-w-4xl leading-relaxed">
            <p>
              Emerald Ape #042 é uma obra digital 1/50 finalizada à mão da coleção Kurio Editions. Cada atributo fica armazenado nos metadados do token e verificado na Ethereum. A obra explora identidade, movimento e luz em um mundo digital sem fronteiras.
            </p>
            <p>
              A propriedade inclui a arte em alta resolução, lançamentos exclusivos para colecionadores e um registro permanente de procedência registrada na rede. Novo dono recebe 5% de direitos autorais nas vendas secundárias, apoiando novos trabalhos e lançamentos da comunidade.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <strong className="text-zinc-200 block mb-1">Rede:</strong>
                <p>Cunhado na Ethereum com procedência imutável e metadados armazenados no IPFS.</p>
              </div>
              <div>
                <strong className="text-zinc-200 block mb-1">Contrato:</strong>
                <p>Direitos autorais do criador: 5% nas vendas secundárias, pagas automaticamente pelos mercados compatíveis.</p>
              </div>
              <div>
                <strong className="text-zinc-200 block mb-1">Direitos autorais:</strong>
                <p className="font-mono text-[11px] text-[#D28A4C]">0x7a42...10E8 - Contrato inteligente ERC-721 verificado.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-xs text-zinc-400">
            <p>19 avaliações de colecionadores verificados na blockchain.</p>
          </div>
        )}
      </div>

      {/* 3. SEÇÃO "MAIS DESTA COLEÇÃO" */}
      <div className="flex flex-col gap-4 md:gap-6 border-t border-[#2D1C14] pt-6 md:pt-8">
        <h3 className="text-sm md:text-base font-bold text-[#F5F1EB]">Mais desta coleção</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {moreFromCollection.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectOtherNft && onSelectOtherNft(item.id)}
              className="bg-[#1A110D] border border-[#2D1C14] rounded-2xl p-2.5 md:p-3 flex flex-col gap-2 hover:border-[#D28A4C] transition-all cursor-pointer group shadow-lg"
            >
              <img src={item.image} alt={item.title} className="w-full aspect-square object-cover rounded-xl" />
              <h5 className="font-semibold text-xs text-[#F5F1EB] group-hover:text-[#D28A4C] transition-colors truncate">{item.title}</h5>
              <span className="text-xs font-bold text-[#D28A4C]">{item.priceEth} ETH</span>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center items-center gap-1.5 pt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D28A4C]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
        </div>
      </div>

     
      <div className="fixed bottom-0 left-0 right-0 bg-[#140D0A]/95 backdrop-blur-md border-t border-[#2D1C14] px-6 py-3 flex items-center justify-between md:hidden z-50">
        <button onClick={onBack} className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1 cursor-pointer">
          <Home className="w-5 h-5" />
        </button>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1 cursor-pointer">
          <Heart className="w-5 h-5" />
        </button>
     
        <div className="relative -top-5">
          <div onClick={onBack} className="w-14 h-14 rounded-full bg-[#D28A4C] border-4 border-[#140D0A] flex items-center justify-center shadow-lg text-[#140D0A] cursor-pointer">
            <Compass className="w-6 h-6" />
          </div>
        </div>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1 cursor-pointer">
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1 cursor-pointer">
          <User className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}