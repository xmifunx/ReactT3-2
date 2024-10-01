import ItemCard, {Item} from "../ItemCard/ItemCard.tsx";
import "../../App.css"

type listingProps = {
    items: any
}

export const Listing = ({ items }: listingProps) => {
    return (
        <ul className='item-list'>
            {items.map((item: Item) => <ItemCard key={item.listing_id} item={item} />)}
        </ul>
    )
}

export default Listing
