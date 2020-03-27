import React from 'react'
import { ProductData } from './mockAPI'

export interface CartItem {
  product: ProductData
  quantity: number
}

interface CartProps {}

interface CartState {
  items: CartItem[]
  addProductToCart: (product: ProductData) => void
  deleteProductFromCart: (product: ProductData) => void
}

const CartContext = React.createContext<CartState>({
  items: [],
  addProductToCart: (product: ProductData) => {},
  deleteProductFromCart: (product: ProductData) => {},
})


// CartProvider ansvarar för att uppdatera kundvagnen
export class CartProvider extends React.Component<CartProps, CartState> {
  constructor(props: CartProps) {
    super(props)

    this.state = {
      items: [],
      addProductToCart: this.addProductToCart,
      deleteProductFromCart: this.deleteProductFromCart
    }
  }

  addProductToCart = (product: ProductData) => {
    // Clone to state array so that we don't mutate the state (which is prohibited in React)
    const clonedItems: CartItem[] = Object.assign([], this.state.items)

    // Check if product is already in cart and increase the quantity
    for (const item of clonedItems) {
      if (product.artNr === item.product.artNr) {
        item.quantity++
        this.setState({ items: clonedItems })
        return
      }
    }
    
    // Otherwise add a whole new cart item
    clonedItems.push({ product, quantity: 1 })
    this.setState({ items: clonedItems })
  }

  deleteProductFromCart = (product: ProductData) => {
    alert('delete product')
    // update state
  }

  getTotalPrice = () => {
    let sum = 0
    for (const item of this.state.items) {
      sum += item.product.price * item.quantity
    }
    return sum
  }

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}

export const CartConsumer = CartContext.Consumer