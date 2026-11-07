export interface NFT {
  id: string;
  title: string;
  priceEth: string;
  image: string;
  category: string;
  isRare?: boolean; 
}

export interface CartItem {
  nft: NFT;
  quantity: number;
}