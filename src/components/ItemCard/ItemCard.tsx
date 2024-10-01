import "../../App.css"

type listItemProps = {
    key: string | number,
    item: Item
}

export type Item = {
    url: string,
    MainImage: MainImage,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    listing_id: number,
    state: string,
}

type MainImage = {
    url_570xN: string
}
export const ItemCard = ({ item }: listItemProps) => {
    const { url, MainImage, title, currency_code, price, quantity, state } = item;

    if (state !== 'active') {
        return null;
    }

    let priceView;
    let quantityColor;

    if (currency_code === 'USD') {
        priceView = `$${price}`
    } else if (currency_code === 'EUR') {
        priceView = `€${price}`
    } else {
        priceView = `${price} ${currency_code}`
    }

    if (quantity <= 10) {
        quantityColor = 'level-low'
    } else if (quantity <= 20) {
        quantityColor = 'level-medium'
    } else {
        quantityColor = 'level-high'
    }

    const name = title.length > 50 ? `${title.slice(0, 50)}...` : title;

    return (
        <div className='item'>
            <div className='item-image'>
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={title}></img>
                </a>
            </div>
            <div className='item-details'>
                <p className='item-title'>{name}</p>
                <p className='item-price'>{priceView}</p>
                <p className={`item-quantity ${quantityColor}`}>{quantity} left</p>
            </div>
        </div>
    )
}

export default ItemCard
