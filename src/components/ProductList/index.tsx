import './styles.css';

type Props = {
    list: string[];
}

export default function ProductList({ list }: Props) {
    return (
        <div className='de2-container de2-mt20'>
            {
                list.map((item) =>
                    <p className='de2-items'>{item}</p>
                )
            }
        </div>
    )
}