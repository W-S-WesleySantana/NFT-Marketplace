import { useState } from "react";
import { Catalog } from "./pages/Catalog";
import { NftDetails } from "./pages/NFTDetails";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Profile } from "./pages/Profile";
import { Footer } from "./components/Footer";
import { AuthModal } from "./components/AuthModal";
import { SuccessModal } from "./components/SuccessModal";
import type { NFT } from "./types";
import { LuShoppingCart } from "react-icons/lu";
import { IoEnterOutline, IoSearchOutline, IoMenu, IoClose } from "react-icons/io5";

const mockNft: NFT = {
  id: '1',
  title: 'Emerald Ape #042',
  priceEth: '1.19',
  image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500',
  category: 'Arte digital',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'catalog' | 'details' | 'cart' | 'checkout' | 'profile'>('catalog');
  const [selectedNft, setSelectedNft] = useState<NFT | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [cartItems, setCartItems] = useState<{ nft: NFT; quantity: number }[]>([
    {
      nft: { id: '1', title: 'Emerald Ape #042', priceEth: '1.19', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500', category: 'Arte digital' },
      quantity: 2
    },
    {
      nft: { id: '2', title: 'Violet Nomad #314', priceEth: '1.39', image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500', category: 'Fotografia' },
      quantity: 6
    }
  ]);
  
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Seleciona um NFT para abrir os detalhes
  const handleSelectNft = (id: string) => {
    setSelectedNft({ ...mockNft, id: id });
    setCurrentPage('details');
  };

  // Adiciona itens ao carrinho
  const handleAddToCart = (nft: NFT) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.nft.id === nft.id);
      if (exists) {
        return prev.map((item) =>
          item.nft.id === nft.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { nft, quantity: 1 }];
    });
    setCurrentPage('cart');
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.nft.id !== id));
  };

  const handleConfirmPurchase = () => {
    setCartItems([]);
    setCurrentPage('catalog');
    setIsOrderConfirmed(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#140D0A] text-zinc-100 flex flex-col justify-between font-sans overflow-x-hidden pb-16 md:pb-0">
      
    
      <header className="border-b border-[#2D1C14] bg-[#140D0A] sticky top-0 z-45">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          
          <div onClick={() => setCurrentPage('catalog')} className="cursor-pointer">
            <span className="font-extrabold text-sm sm:text-base text-[#F5F1EB] tracking-widest uppercase">KURIO</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium">
            <button onClick={() => setCurrentPage('catalog')} className={`cursor-pointer ${currentPage === 'catalog' ? 'text-[#D28A4C] font-semibold' : 'text-[#F5F1EB]/70 hover:text-white'}`}>Inicio</button>
            <button onClick={() => setCurrentPage('catalog')} className="text-[#F5F1EB]/70 hover:text-white cursor-pointer">Mercado</button>
            <button onClick={() => setCurrentPage('catalog')} className="text-[#F5F1EB]/70 hover:text-white cursor-pointer">Criadores</button>
            <button onClick={() => setCurrentPage('catalog')} className="text-[#F5F1EB]/70 hover:text-white cursor-pointer">Aprenda</button>
            <button onClick={() => setCurrentPage('profile')} className={`cursor-pointer ${currentPage === 'profile' ? 'text-[#D28A4C] font-semibold' : 'text-[#F5F1EB]/70 hover:text-white'}`}>Meu Perfil</button>
          </nav>

          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-[#F5F1EB]/70 hover:text-white text-base cursor-pointer hidden sm:block"><IoSearchOutline /></button>

            <button onClick={() => setCurrentPage('cart')} className="relative text-[#F5F1EB]/70 hover:text-white text-lg cursor-pointer">
              <LuShoppingCart size={20} />
              {totalCartCount > 0 && (
                <span className="absolute -top-2 -right-2.5 bg-[#D28A4C] text-[#140D0A] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalCartCount}
                </span>
              )}
            </button>

            {user ? (
              <button onClick={() => setCurrentPage('profile')} className="bg-[#1A110D] border border-[#2D1C14] text-xs text-zinc-200 px-3 py-1.5 rounded-lg hidden sm:flex items-center gap-2 cursor-pointer">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {user.name}
              </button>
            ) : (
              <button onClick={() => setIsAuthOpen(true)} className="bg-[#D28A4C] hover:bg-[#b8743a] hidden sm:flex items-center gap-1.5 text-[#140D0A] text-xs font-bold px-4 py-2 rounded-xl cursor-pointer">
                <IoEnterOutline className="text-sm stroke-[2.5]" /> Entrar
              </button>
            )}

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-zinc-300 text-2xl cursor-pointer">
              {mobileMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A110D] border-b border-[#2D1C14] px-6 py-6 flex flex-col gap-4 text-xs font-medium">
            <button onClick={() => { setCurrentPage('catalog'); setMobileMenuOpen(false); }} className="text-left text-zinc-300 py-2">Início</button>
            <button onClick={() => { setCurrentPage('catalog'); setMobileMenuOpen(false); }} className="text-left text-zinc-300 py-2">Mercado</button>
            <button onClick={() => { setCurrentPage('catalog'); setMobileMenuOpen(false); }} className="text-left text-zinc-300 py-2">Criadores</button>
            <button onClick={() => { setCurrentPage('catalog'); setMobileMenuOpen(false); }} className="text-left text-zinc-300 py-2">Aprenda</button>
            <button onClick={() => { setCurrentPage('profile'); setMobileMenuOpen(false); }} className="text-left text-zinc-300 py-2">Meu Perfil</button>
            {!user && (
              <button onClick={() => { setIsAuthOpen(true); setMobileMenuOpen(false); }} className="bg-[#D28A4C] text-[#140D0A] font-bold py-2.5 rounded-xl text-center mt-2">
                Entrar / Criar Conta
              </button>
            )}
          </div>
        )}
      </header>

    
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6">
        {currentPage === 'catalog' && <Catalog onSelectNft={handleSelectNft} />}
        {currentPage === 'details' && selectedNft && <NftDetails nft={selectedNft} onAddToCart={handleAddToCart} onBack={() => setCurrentPage('catalog')} onSelectOtherNft={handleSelectNft} />}
        {currentPage === 'cart' && (
  <Cart 
    items={cartItems} 
    onRemove={handleRemoveFromCart}
    onCheckout={() => setCurrentPage('checkout')}
    onContinueShopping={() => setCurrentPage('catalog')}
  />
)}
        {currentPage === 'checkout' && <Checkout items={cartItems} onConfirmPurchase={handleConfirmPurchase} onBackToCart={() => setCurrentPage('cart')} />}
        {currentPage === 'profile' && <Profile />}
      </main>

  
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1A110D]/95 backdrop-blur-md border-t border-[#2D1C14] px-8 py-3 flex justify-between items-center z-50">
        <button onClick={() => setCurrentPage('catalog')} className="text-[#D28A4C] text-xl cursor-pointer">🏠</button>
        <button onClick={() => alert('Favoritos')} className="text-zinc-500 hover:text-white text-xl cursor-pointer">❤️</button>
        <button onClick={() => setCurrentPage('cart')} className="relative text-zinc-500 hover:text-white text-xl cursor-pointer">
          🛒
          {totalCartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#D28A4C] text-[#140D0A] text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              {totalCartCount}
            </span>
          )}
        </button>
        <button onClick={() => setCurrentPage('profile')} className="text-zinc-500 hover:text-white text-xl cursor-pointer">👤</button>
      </div>

      <SuccessModal isOpen={isOrderConfirmed} onClose={() => setIsOrderConfirmed(false)} items={cartItems} />
      <Footer />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLoginSuccess={(name, email) => setUser({ name, email })} />

    </div>
  );
}