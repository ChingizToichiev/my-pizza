import { DesertsData, PizzaData, SnacksData } from '../../consts'
import ProductItem from './ProductItem/ProductItem'
import { PizzaContainer, Title, Container } from './style'

const Product = ({ id, name }) => {
    return (
        <Container id={id}>
            <Title>
                {name}
            </Title>
            <PizzaContainer>
                {
                    id === "pizzas" ?
                        PizzaData.map((pizza, index) => (
                            <ProductItem key={index} data={pizza} />
                        )) :
                            id === "deserts" ?
                                DesertsData.map((deserts, index) => (
                                    <ProductItem key={index} data={deserts} />
                                )) :
                                    id === "snacks" ?
                                        SnacksData.map((snacks, index) => (
                                            <ProductItem key={index} data={snacks} />
                                        )) :
                                        <div>
                                            {name} не найдено
                                        </div>
            }
            </PizzaContainer>
        </Container>
    )
}
export default Product