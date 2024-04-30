import * as C from './styles';

type Props = {
    p: string;
    img: string;
    alt: string;
}

export const ItemList = ({ p, img, alt }: Props) => {
    return (
        <>
            <C.ItemIcone>
                <img src={img} alt={alt} />
            </C.ItemIcone>
            <p>{p}</p>
        </>
    );
}