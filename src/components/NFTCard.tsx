

import type{ NFT } from '../types';

interface NFTCardProps {
  nft: NFT;
  onSelect: (id: string) => void;
}

export function NFTCard({ nft, onSelect }: NFTCardProps) {
  return (
    <div 
      onClick={() => onSelect(nft.id)}
      className="bg-[#121214] border border-[#27272a] rounded-2xl overflow-hidden p-3 flex flex-col gap-3 hover:border-[#f97316] transition-all cursor-pointer group"
    >
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-black relative">
        <img 
          src={nft.image} 
          alt={nft.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-[10px] text-zinc-300 px-2 py-1 rounded-md border border-[#27272a]">
          {nft.category || 'Arte'}
        </span>
      </div>

      <div className="flex flex-col gap-1 px-1">
        <h4 className="font-semibold text-sm text-zinc-100 group-hover:text-[#f97316] transition-colors">
          {nft.title}
        </h4>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-zinc-400">Preço atual</span>
          <span className="text-xs font-bold text-[#f97316]">{nft.priceEth} ETH</span>
        </div>
      </div>
    </div>
  );
}