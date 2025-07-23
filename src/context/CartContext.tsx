import React, { createContext, useContext, useState, useEffect } from 'react';
import { cartAPI } from '@/services/api';
import { useAuth } from './AuthContext';
import { toast } from '@/hooks/use-toast';

interface CartItem {
  _id: string;
  userid: string;
  productid: {
    _id: string;
    productname: string;
    price: number;
    image: string;
    stock_available: number;
  };
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (productId: string, quantity?: number) => Promise<void>;
  updateCartItem: (cartId: string, quantity: number) => Promise<void>;
  removeFromCart: (cartId: string) => Promise<void>;
  clearCart: () => void;
  getCartTotal: () => number;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

  const refreshCart = async () => {
    if (!user) {
      setCartItems([]);
      return;
    }

    try {
      const response = await cartAPI.getUserCart(user._id);
      setCartItems(response.data.cart || []);
    } catch (error) {
      console.error('Error fetching cart:', error);
      setCartItems([]);
    }
  };

  useEffect(() => {
    refreshCart();
  }, [user]);

  const addToCart = async (productId: string, quantity: number = 1) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to add items to cart",
        variant: "destructive",
      });
      return;
    }

    try {
      await cartAPI.addToCart(user._id, productId, quantity);
      await refreshCart();
      toast({
        title: "Added to Cart",
        description: "Item has been added to your cart",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Failed to add item to cart",
        variant: "destructive",
      });
    }
  };

  const updateCartItem = async (cartId: string, quantity: number) => {
    try {
      await cartAPI.updateCartItem(cartId, quantity);
      await refreshCart();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Failed to update cart item",
        variant: "destructive",
      });
    }
  };

  const removeFromCart = async (cartId: string) => {
    try {
      await cartAPI.removeFromCart(cartId);
      await refreshCart();
      toast({
        title: "Removed from Cart",
        description: "Item has been removed from your cart",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.error || "Failed to remove item from cart",
        variant: "destructive",
      });
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.productid.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateCartItem,
      removeFromCart,
      clearCart,
      getCartTotal,
      refreshCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};