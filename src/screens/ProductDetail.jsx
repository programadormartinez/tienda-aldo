import React from 'react'
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {

    const [item, setItem] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        fetch('').then(data => {
        }).catch((err)=> {
        });
        // customFetch(2000, products.find(item => item.id === parseInt(idItem)))
        //     .then(result => setItem(result))
        //     .catch(err => console.log(err))
    }, []);
    
    const [itemCount, setItemCount] = useState(0);
    const [itemCostTotal, setItemCostTotal] = useState(0);
    const test = useContext(CartContext);
    const onAdd = (qty) => {
        // alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addCart(item, qty, (item.cost * qty));
    }
    return (
        <>
        {
            item && item.image
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to={'/cart'} style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ProductDetail