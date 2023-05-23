import { Anchor } from "antd"
import { NavItems } from "../../consts"
import { NavigationWrapper, Logo, ButtonCart, RightNavigation } from "./style"
const Navigation = () => {
    return (
        <NavigationWrapper>
            <RightNavigation>
                <Logo>
                    myPizza
                </Logo>
                <Anchor
                    direction="horizontal"
                    items={NavItems}
                    className="linkNavigation"
                />
            </RightNavigation>
            <ButtonCart>
                Корзина
            </ButtonCart>
        </NavigationWrapper>
    )
}
export default Navigation