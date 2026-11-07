interface HeroBannerProps {
  onExplore: () => void;
}

export function HeroBanner({ onExplore }: HeroBannerProps) {
  return (
    <div className="w-full bg-[#09090b] border border-[#27272a] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
      
      <div className="flex flex-col gap-6 max-w-xl">
        <span className="text-xs tracking-wider text-zinc-400 font-mono">
          Bem-vindo à Kurio
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold text-zinc-100 leading-[1.1] uppercase tracking-wide">
          Seja dono do futuro <br />
          <span className="text-zinc-100">da arte digital</span>
        </h1>

        <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
          Descubra NFTs selecionados de criadores emergentes e consagrados. 
          Colecione arte digital rara, apoie artistas e tenha uma parte da cultura da internet.
        </p>

        <div className="flex items-center gap-4 pt-2">
          <button 
            onClick={onExplore}
            className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-xs px-7 py-3.5 rounded-xl transition-colors cursor-pointer tracking-wider"
          >
            EXPLORAR
          </button>
        </div>
      </div>

      <div className="relative w-full md:w-110 aspect-square rounded-2xl overflow-hidden border border-[#27272a] bg-[#121214] shadow-2xl flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800" 
          alt="NFT Destaque" 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
        </div>
      </div>

    </div>
  );
}