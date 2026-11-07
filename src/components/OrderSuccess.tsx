
interface OrderSuccessProps {
  order: any;
  onGoHome: () => void;
}

export function OrderSuccess({ order, onGoHome }: OrderSuccessProps) {
  if (!order) return null;

  return (
    <div className="max-w-xl mx-auto px-6 py-12 flex flex-col gap-8 text-center">
      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col items-center gap-6">
        <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-400 text-2xl">
          ✓
        </div>

        <div>
          <h2 className="text-2xl font-bold">Pedido Confirmado!</h2>
          <p className="text-xs text-zinc-400 mt-1">Sua transação foi processada com sucesso na blockchain simulada.</p>
        </div>

        <div className="w-full bg-zinc-950 border border-zinc-800 p-4 rounded-xl flex flex-col gap-3 text-left text-sm">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">ID do Pedido</span>
            <span className="font-mono text-purple-400">{order.id}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">Carteira</span>
            <span className="font-mono text-zinc-300">{order.walletAddress}</span>
          </div>
          <div className="flex justify-between font-bold text-base pt-1">
            <span>Total Pago</span>
            <span className="text-purple-400">{order.totalEth} ETH</span>
          </div>
        </div>

        <button 
          onClick={onGoHome}
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-3 rounded-xl transition-colors"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  );
}