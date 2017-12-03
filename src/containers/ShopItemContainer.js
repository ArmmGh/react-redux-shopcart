import { connect } from 'react-redux';
import ShopItem from '../components/ShopItem';
import { addToCart } from '../actions';

const mapDispatchToProps = dispatch => ({
    onAdd: id => dispatch(addToCart(id))
});

const ShopItemContainer = connect(null, mapDispatchToProps)(ShopItem);

export default ShopItemContainer;