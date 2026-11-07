


export function Footer() {
  return (
    <footer className="border-t border-[#2D1C14] bg-[#140D0A] text-zinc-400 py-12 px-8 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
     
        <div className="flex flex-col gap-3">
          <span className="w-8 h-8 rounded-full bg-[#D28A4C]/20 text-[#D28A4C] flex items-center justify-center font-bold">N</span>
          <h4 className="font-bold text-[#F5F1EB]">Segurança da carteira</h4>
          <p className="text-zinc-500 text-[11px] leading-relaxed">Proteja seus ativos digitais com as melhores práticas de conexão.</p>
        </div>


        <div className="flex flex-col gap-3">
          <span className="w-8 h-8 rounded-full bg-[#D28A4C]/20 text-[#D28A4C] flex items-center justify-center font-bold">C</span>
          <h4 className="font-bold text-[#F5F1EB]">Criadores em destaque</h4>
          <p className="text-zinc-500 text-[11px] leading-relaxed">Conheça artistas emergentes e coleções exclusivas.</p>
        </div>


        <div className="flex flex-col gap-3">
          <span className="w-8 h-8 rounded-full bg-[#D28A4C]/20 text-[#D28A4C] flex items-center justify-center font-bold">D</span>
          <h4 className="font-bold text-[#F5F1EB]">Alertas de Lançamento</h4>
          <p className="text-zinc-500 text-[11px] leading-relaxed">Receba notificações de novos drops diretamente no seu e-mail.</p>
        </div>


        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-[#F5F1EB]">Antecipe-se ao próximo lançamento</h4>
          <div className="flex gap-2">
            <input type="email" placeholder="Fique por dentro..." className="bg-[#1A110D] border border-[#2D1C14] px-3 py-2 rounded-xl text-xs flex-1 text-white" />
            <button className="bg-[#D28A4C] text-[#140D0A] font-bold px-4 py-2 rounded-xl cursor-pointer">Enviar</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-[#2D1C14] mt-8 pt-6 flex justify-between text-[11px] text-zinc-600">
        <span>KURIO © 2026. Todos os direitos reservados.</span>
        <span>Feito para colecionadores de arte digital.</span>
      </div>
    </footer>
  );
}