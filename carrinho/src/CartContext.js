import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    return(
        <CartContext.Provider value={{ carrinho, setCarrinho }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('Devemos usar o useCart dentro de um CartProvider');
    }
    return context;
}

