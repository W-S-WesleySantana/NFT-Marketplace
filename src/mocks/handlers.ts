import { http, HttpResponse } from 'msw';



  // Histórico de pedidos criados
  // (coloque esta variável fora dos handlers, no topo do arquivo junto com 'cart')
  


const nftsList = [
  
  {
    id: '1',
    title: 'CyberApe #4021',
    creator: '0xCryptoArtist',
    priceEth: '1.45',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&auto=format&fit=crop&q=80',
    category: 'Art',
    availableQuantity: 3,
  },
  {
    id: '2',
    title: 'Neon Samurai #09',
    creator: 'FutureLabs',
    priceEth: '0.88',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80',
    category: 'Gaming',
    availableQuantity: 1,
  },
  {
    id: '3',
    title: 'Abstract Void #102',
    creator: 'PixelMaster',
    priceEth: '2.10',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    category: 'Art',
    availableQuantity: 5,
  },
];

// Carrinho simulado na memória do MSW
let cart: Array<{ nftId: string; quantity: number }> = [];
let orders: Array<any> = [];

export const handlers = [
  // Listar NFTs
  http.get('/api/nfts', ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('q')?.toLowerCase() || '';
    const category = url.searchParams.get('category') || 'all';

    let result = nftsList;

    if (search) {
      result = result.filter(item => item.title.toLowerCase().includes(search));
    }

    if (category !== 'all') {
      result = result.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }

    return HttpResponse.json(result);
  }),

  // Buscar um NFT específico pelo ID
  http.get('/api/nfts/:id', ({ params }) => {
    const nft = nftsList.find(item => item.id === params.id);
    if (!nft) {
      return new HttpResponse(null, { status: 404 });
    }
    return HttpResponse.json(nft);
  }),

  // Buscar itens do carrinho
  http.get('/api/cart', () => {
    const items = cart.map(cartItem => {
      const nft = nftsList.find(n => n.id === cartItem.nftId);
      return {
        nft,
        quantity: cartItem.quantity,
      };
    });
    return HttpResponse.json(items);
  }),

  // Adicionar ao carrinho
  http.post('/api/cart', async ({ request }) => {
    const body = (await request.json()) as { nftId: string; quantity: number };
    const existing = cart.find(item => item.nftId === body.nftId);

    if (existing) {
      existing.quantity += body.quantity;
    } else {
      cart.push({ nftId: body.nftId, quantity: body.quantity });
    }

    return HttpResponse.json({ success: true });
  }),


  http.put('/api/cart/:nftId', async ({ params, request }) => {
    const { nftId } = params;
    const body = (await request.json()) as { quantity: number };

    const item = cart.find(c => c.nftId === nftId);
    if (item) {
      if (body.quantity <= 0) {
        cart = cart.filter(c => c.nftId !== nftId);
      } else {
        item.quantity = body.quantity;
      }
    }

    return HttpResponse.json({ success: true });
  }),

  // Remover item do carrinho
  http.delete('/api/cart/:nftId', ({ params }) => {
    const { nftId } = params;
    cart = cart.filter(c => c.nftId !== nftId);
    return HttpResponse.json({ success: true });
  }),

  // Criar Pedido (Checkout com Idempotência)
  http.post('/api/orders', async ({ request }) => {
    const idempotencyKey = request.headers.get('x-idempotency-key');
    const body = (await request.json()) as any;

    // Verifica se já existe um pedido com essa chave de idempotência
    const existingOrder = orders.find(o => o.idempotencyKey === idempotencyKey);
    if (existingOrder) {
      return HttpResponse.json(existingOrder);
    }

    // Calcula os itens do pedido com base no carrinho atual
    const items = cart.map(cartItem => ({
      nft: nftsList.find(n => n.id === cartItem.nftId),
      quantity: cartItem.quantity,
    }));

    const subtotal = items.reduce((acc, item) => acc + (item.nft ? parseFloat(item.nft.priceEth) * item.quantity : 0), 0);
    const networkFee = 0.0050;
    const total = subtotal + networkFee;

    const newOrder = {
      id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      idempotencyKey: idempotencyKey || 'default-key',
      items,
      subtotalEth: subtotal.toFixed(4),
      networkFeeEth: networkFee.toFixed(4),
      totalEth: total.toFixed(4),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      walletAddress: body.walletAddress || '0x71C...3a9',
    };

    orders.push(newOrder);
    
    // Esvazia o carrinho após confirmar a compra
    cart = [];

    return HttpResponse.json(newOrder);
  }),
];



