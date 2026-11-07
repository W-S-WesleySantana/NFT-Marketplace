

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletName: string) => void;
}

export function WalletModal({ isOpen, onClose, onConnect }: WalletModalProps) {
  if (!isOpen) return null;

  const wallets = [
    { name: 'MetaMask', icon: '🦊', desc: 'Conectar usando a extensão do navegador' },
    { name: 'WalletConnect', icon: '⚡', desc: 'Conectar com QR Code via aplicativo móvel' },
    { name: 'Phantom', icon: '👻', desc: 'Conectar à carteira Solana / Multi-chain' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="bg-[#121214] border border-[#27272a] rounded-2xl w-full max-w-md p-6 flex flex-col gap-6 shadow-2xl">
        <div className="flex justify-between items-center border-b border-[#27272a] pb-4">
          <h3 className="text-lg font-bold text-zinc-100">Conectar Carteira</h3>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white text-sm bg-[#09090b] border border-[#27272a] w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => {
                onConnect(wallet.name);
                onClose();
              }}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#09090b] border border-[#27272a] hover:border-[#f97316] hover:bg-[#18181b] transition-all text-left group cursor-pointer"
            >
              <span className="text-2xl">{wallet.icon}</span>
              <div>
                <h4 className="font-semibold text-sm text-zinc-100 group-hover:text-[#f97316] transition-colors">
                  {wallet.name}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">{wallet.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <p className="text-[11px] text-zinc-500 text-center leading-relaxed">
          Ao conectar uma carteira, você concorda com os Termos de Serviço e a Política de Privacidade do Marketplace.
        </p>
      </div>
    </div>
  );
}