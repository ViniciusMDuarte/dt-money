
import logoImg from '../../assets/logo.svg'
import { Container } from './styles';
import { Content } from './styles';

interface HeaderProps {
    onOpenNewTrasactionModal: () => void;
}
export function Header({onOpenNewTrasactionModal}: HeaderProps) {
   

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Vd money"/>
                <button type="button"
                onClick={onOpenNewTrasactionModal}
                >
                    Nova transação
                </button>
           
            </Content>
          
        </Container>
    )
}