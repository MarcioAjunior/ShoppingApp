import React from 'react'
import LineChart from '../../shared/LineChart'
import AppContainer from '../AppContainer/AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'
import { Wrapper, Container } from './App.styles'
import extractPercentage from '../../utils/extractPercentage'
import Calculator from '../Calculator'
import { useSelector, useDispatch } from 'react-redux'
import { toggleProduct } from '../../store/Products/Products.actions'
//my selector functios
import { allProducts, selectedProductsfilter, totalPrice } from '../../store/Products/Selectors'
function App () {
  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const products = useSelector(allProducts)
  const selectedProducts = useSelector(selectedProductsfilter)
  const selectedTotalPrice = useSelector(totalPrice)
  const dispatch = useDispatch()

 
  function handleToggle (id) {
    dispatch(toggleProduct(id))
  }

  return <Wrapper>
    <Container>
      <AppHeader />
      <AppContainer
        left={
          <ShoppingList
            title="Produtos disponíveis"
            products={products}
            onToggle={handleToggle}
          />}
        middle={
          <ShoppingList
            title="Sua lista de compras"
            displayOnlySelected
            onToggle={handleToggle}
          />}
        right={<div>
          estatisticas

          <LineChart
            color={colors[0]}
            title="saudavel"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('healthy'))
                .length
            )}
          />
          <LineChart
            color={colors[1]}
            title="nao tao saudavel"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('junk'))
                .length
            )}
          />
          <LineChart
            color={colors[2]}
            title="limpeza"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('cleaning'))
                .length
            )}
          />
          <LineChart
            color={colors[3]}
            title="outros"
            percentage={extractPercentage(
              selectedProducts.length,
              selectedProducts
                .filter(product => product.tags.includes('others'))
                .length
            )}
          />

          <div style={{ marginTop: 12 }}>
            <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
              previsão de gastos:
            </h2>
            <div style={{ fontSize: 24 }}>
              { selectedTotalPrice.toLocaleString('pt-br', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL'
              }) }

                <Calculator />
            </div>
          </div>
        </div>}
      />
    </Container>
  </Wrapper>
}

export default App