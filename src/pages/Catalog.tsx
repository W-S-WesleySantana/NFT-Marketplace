import { useState } from 'react';
import type { NFT } from '../types';
import { Search, SlidersHorizontal, Home, Heart, ShoppingCart, User, Compass } from 'lucide-react';

interface CatalogProps {
  onSelectNft: (id: string) => void;
}

const allNftsMock: NFT[] = [
  { id: '1', title: 'Emerald Ape #042', priceEth: '1.19', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500', category: 'Arte digital' },
  { id: '2', title: 'Sage Nomad #089', priceEth: '1.69', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500', category: 'Fotografia' },
  { id: '3', title: 'Neon Vessel #552', priceEth: '1.99', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500', category: 'Música' },
  { id: '4', title: 'Cosmic Bloom #118', priceEth: '1.29', image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500', category: 'Arte 3D' },
  { id: '5', title: 'Violet Nomad #014', priceEth: '1.39', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500', category: 'Colecionáveis' },
  { id: '6', title: 'Ivory Baron #888', priceEth: '1.79', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500', category: 'Generativa' },
  { id: '7', title: 'Golden Beast #207', priceEth: '0.99', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500', category: 'Jogos' },
  { id: '8', title: 'Golden Frequency #071', priceEth: '0.59', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500', category: 'Assinaturas' },
  { id: '9', title: 'Golden Signal #168', priceEth: '0.39', image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=500', category: 'Utilidade' },
];

export function Catalog({ onSelectNft }: CatalogProps) {
  const [maxPrice, setMaxPrice] = useState(5.0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('Todos os NFTs');

  const categories = [
    { name: 'Arte digital', count: 240 },
    { name: 'Fotografia', count: 120 },
    { name: 'Música', count: 85 },
    { name: 'Arte 3D', count: 64 },
    { name: 'Colecionáveis', count: 210 },
    { name: 'Generativa', count: 95 },
    { name: 'Jogos', count: 150 },
    { name: 'Assinaturas', count: 45 },
    { name: 'Utilidade', count: 60 },
  ];

  return (
    <div className="flex flex-col gap-6 md:gap-12 py-4 md:py-6 pb-24 md:pb-6 text-[#F5F1EB] bg-[#140D0A] min-h-screen px-4 md:px-0">
      

      <div className="flex md:hidden items-center justify-between gap-3 w-full">
        <div className="flex-1 bg-[#1A110D] border border-[#2D1C14] rounded-2xl px-4 py-3 flex items-center gap-3 text-zinc-400">
          <Search className="w-4 h-4 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Explorar coleções" 
            className="bg-transparent border-none outline-none text-xs text-[#F5F1EB] w-full placeholder:text-zinc-500"
          />
        </div>
        <button className="bg-[#1A110D] border border-[#2D1C14] p-3 rounded-2xl text-[#D28A4C] flex items-center justify-center shrink-0">
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="w-full bg-[#1A110D] border border-[#2D1C14] rounded-3xl p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="flex flex-col gap-3 md:gap-5 max-w-xl">
          <span className="text-[10px] md:text-xs tracking-wider text-[#D28A4C] font-mono uppercase">
            Bem-vindo à Kurio
          </span>
          <h1 className="text-2xl md:text-5xl font-extrabold text-[#F5F1EB] leading-[1.1] uppercase tracking-wide">
            <span className="md:hidden">SEJA DONO DA<br />CULTURA DIGITAL</span>
            <span className="hidden md:inline">Seja dono do futuro <br /><span>da arte digital</span></span>
          </h1>
          <p className="text-xs text-zinc-400 leading-relaxed font-normal">
            Descubra NFTs selecionados de criadores <span className="md:hidden">do mundo todo.</span><span className="hidden md:inline">emergentes e consagrados. Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.</span>
          </p>
          <div className="flex items-center gap-4 pt-1 md:pt-2">
            <button className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs px-6 md:px-7 py-3 rounded-xl transition-colors cursor-pointer tracking-wider flex items-center gap-1.5">
              EXPLORAR <span className="md:hidden">→</span>
            </button>
          </div>
        </div>


        <div className="relative w-full md:w-105 aspect-[4/3] md:aspect-square rounded-2xl overflow-hidden border border-[#2D1C14] bg-[#140D0A] shadow-2xl flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800" 
            alt="NFT Destaque" 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-4 right-4 w-16 h-16 md:hidden rounded-xl overflow-hidden border-2 border-[#1A110D] shadow-lg">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=300" alt="Mini" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D28A4C]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
   
        <div className="hidden lg:flex lg:col-span-1 flex-col gap-8 bg-[#1A110D] border border-[#2D1C14] p-6 rounded-2xl h-fit">
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB]">Coleções</h4>
            <div className="flex flex-col gap-2 text-xs">
              {categories.map((cat, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex justify-between items-center py-1.5 px-2 rounded-lg cursor-pointer transition-colors ${selectedCategory === cat.name ? 'bg-[#D28A4C]/20 text-[#D28A4C]' : 'text-zinc-400 hover:text-white'}`}
                >
                  <span>{cat.name}</span>
                  <span className="text-[10px] text-zinc-600">({cat.count})</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#2D1C14] pt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB]">Faixa de preço</h4>
            <div className="flex justify-between text-[11px] text-zinc-400">
              <span>Máx:</span>
              <span className="text-[#D28A4C] font-semibold">{maxPrice} ETH</span>
            </div>
            <input 
              type="range" 
              min="0.1" 
              max="15" 
              step="0.1"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#D28A4C] bg-[#2D1C14] h-1.5 rounded-lg appearance-none cursor-pointer"
            />
            <button className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs py-2.5 rounded-xl transition-colors mt-2 cursor-pointer">
              Aplicar
            </button>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#2D1C14] pt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F5F1EB]">Redes</h4>
            <div className="flex flex-col gap-2 text-xs text-zinc-400">
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#D28A4C]" /> Ethereum (240)</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#D28A4C]" /> Polygon (120)</label>
              <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#D28A4C]" /> Solana (85)</label>
            </div>
          </div>

          <div className="border-t border-[#2D1C14] pt-5 flex flex-col gap-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#D28A4C]">NFT EM DESTAQUE</h4>
            <span className="text-xs font-extrabold text-[#F5F1EB]">OFERTA LIMITADA</span>
            <div className="bg-[#140D0A] border border-[#2D1C14] rounded-xl overflow-hidden p-3 flex flex-col gap-3">
              <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500" alt="Destaque" className="w-full aspect-square object-cover rounded-lg" />
              <button 
                onClick={() => onSelectNft('2')}
                className="bg-[#D28A4C] hover:bg-[#b8743a] text-[#140D0A] font-bold text-xs py-2 rounded-lg text-center cursor-pointer"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>

        
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
          
          
          <div className="flex items-center justify-between border-b border-[#2D1C14] pb-4 text-xs overflow-x-auto no-scrollbar">
            <div className="flex gap-6 font-medium shrink-0">
              {['Todos os NFTs', 'Novos lançamentos', 'Em alta'].map((tab) => (
                <span 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer pb-4 -mb-4 transition-colors whitespace-nowrap ${activeTab === tab ? 'text-[#D28A4C] border-b-2 border-[#D28A4C] font-semibold' : 'text-zinc-500 hover:text-white'}`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <span className="text-zinc-500 hidden md:inline shrink-0">Ordenar por: <strong className="text-zinc-300">Relevância</strong></span>
          </div>

         
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {allNftsMock.map((nft, index) => (
              <div 
                key={nft.id}
                onClick={() => onSelectNft(nft.id)}
                className={`bg-[#1A110D] border border-[#2D1C14] rounded-2xl overflow-hidden p-2.5 md:p-3 flex flex-col gap-2.5 md:gap-3 hover:border-[#D28A4C] transition-all cursor-pointer group shadow-lg ${index % 2 !== 0 ? 'md:translate-y-0' : ''}`}
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-[#140D0A] relative">
                  <img src={nft.image} alt={nft.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                
                  {index === 2 && (
                    <span className="absolute top-2 left-2 bg-[#D28A4C] text-[#140D0A] text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                      Raro
                    </span>
                  )}
                 
                  <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-zinc-300">
                    <Heart className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <h4 className="font-semibold text-xs md:text-sm text-[#F5F1EB] group-hover:text-[#D28A4C] transition-colors truncate">{nft.title}</h4>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-0.5 md:mt-1 gap-0.5">
                    <span className="text-[10px] md:text-[11px] text-zinc-500">Preço atual</span>
                    <span className="text-xs md:text-xs font-bold text-[#D28A4C]">{nft.priceEth} ETH</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
          <div className="flex justify-center md:justify-end items-center gap-2 pt-4">
            <span className="w-7 h-7 rounded-lg bg-[#D28A4C] text-[#140D0A] text-xs font-bold flex items-center justify-center cursor-pointer">1</span>
            {[2, 3, 4, 5].map((num) => (
              <span key={num} className="w-7 h-7 rounded-lg bg-[#1A110D] border border-[#2D1C14] text-zinc-400 text-xs font-bold flex items-center justify-center cursor-pointer hover:bg-zinc-800">{num}</span>
            ))}
          </div>

        </div>
      </div>

     
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div className="bg-[#1A110D] border border-[#2D1C14] rounded-2xl p-6 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-55">
            <h4 className="text-xs font-bold text-[#F5F1EB]">Lançamentos gênese de edição limitada</h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed">Colecione arte digital rara, apoie artistas e tenha uma parte da cultura.</p>
            <button className="bg-[#D28A4C] text-[#140D0A] font-bold text-[11px] px-4 py-2 rounded-xl w-fit mt-1 cursor-pointer">Explorar →</button>
          </div>
          <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400" alt="Banner 1" className="w-28 h-28 object-cover rounded-xl border border-[#2D1C14]" />
        </div>

        <div className="bg-[#1A110D] border border-[#2D1C14] rounded-2xl p-6 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-55">
            <h4 className="text-xs font-bold text-[#F5F1EB]">Arte digital selecionada e muito mais</h4>
            <p className="text-[11px] text-zinc-500 leading-relaxed">Descubra NFTs selecionados de criadores consagrados.</p>
            <button className="bg-[#D28A4C] text-[#140D0A] font-bold text-[11px] px-4 py-2 rounded-xl w-fit mt-1 cursor-pointer">Explorar →</button>
          </div>
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" alt="Banner 2" className="w-28 h-28 object-cover rounded-xl border border-[#2D1C14]" />
        </div>
      </div>

  
      <div className="flex flex-col gap-6 pt-10 border-t border-[#2D1C14]">
        <div className="text-center flex flex-col gap-2">
          <h3 className="text-lg font-bold text-[#F5F1EB]">Diário da Cunhagem</h3>
          <p className="text-xs text-zinc-500">Notícias, guias e insights para colecionadores e criadores de arte digital.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Como funciona a propriedade de NFTs', date: '12 de outubro' },
            { title: 'As tendências digitais para acompanhar', date: '10 de outubro' },
            { title: 'Raridade, atributos e procedência', date: '08 de outubro' },
            { title: 'Como proteger sua carteira', date: '05 de outubro' }
          ].map((post, idx) => (
            <div key={idx} className="bg-[#1A110D] border border-[#2D1C14] rounded-2xl p-4 flex flex-col gap-3">
              <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500" alt="Post" className="w-full aspect-video object-cover rounded-xl" />
              <span className="text-[10px] text-[#D28A4C] font-mono">{post.date}</span>
              <h5 className="text-xs font-bold text-[#F5F1EB] leading-snug">{post.title}</h5>
            </div>
          ))}
        </div>
      </div>

    
      <div className="fixed bottom-0 left-0 right-0 bg-[#140D0A]/95 backdrop-blur-md border-t border-[#2D1C14] px-6 py-3 flex items-center justify-between md:hidden z-50">
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1">
          <Home className="w-5 h-5" />
        </button>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1">
          <Heart className="w-5 h-5" />
        </button>
       
        <div className="relative -top-5">
          <div className="w-14 h-14 rounded-full bg-[#D28A4C] border-4 border-[#140D0A] flex items-center justify-center shadow-lg text-[#140D0A] cursor-pointer">
            <Compass className="w-6 h-6" />
          </div>
        </div>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1">
          <ShoppingCart className="w-5 h-5" />
        </button>
        <button className="text-zinc-500 hover:text-[#D28A4C] flex flex-col items-center gap-1">
          <User className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}