import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
});

export async function getNFTById(id: string) {
  const response = await api.get(`/nfts/${id}`);
  return response.data;
}

export async function getCart() {
  const response = await api.get('/cart');
  return response.data;
}

export async function addToCart(nftId: string, quantity: number = 1) {
  const response = await api.post('/cart', { nftId, quantity });
  return response.data;

}

export async function updateCartItem(nftId: string, quantity: number) {
  const response = await api.put(`/api/cart/${nftId}`, { quantity });
  return response.data;
}

export async function removeCartItem(nftId: string) {
  const response = await api.delete(`/api/cart/${nftId}`);
  return response.data;
}

export async function createOrder(walletAddress: string) {
  // Gera uma chave de idempotência única para evitar pedidos duplicados
  const idempotencyKey = 'idemp-' + Date.now() + '-' + Math.random().toString(36).substring(2, 9);

  
  const response = await api.post('/orders', { walletAddress }, {
    headers: {
      'x-idempotency-key': idempotencyKey,
    },
  });
  return response.data;
}