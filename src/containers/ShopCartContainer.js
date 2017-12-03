import { connect } from 'react-redux';
import ShopCart from '../components/ShopCart';
import { deleteCart } from '../actions';

const mapStateToProps = state => ({
    cartstate: state.shopcart.filter(item => item.isAdded)
});
const mapDispatchToProps = dispatch => ({
    onDelete: (id) => {
        return new Promise(resolve => {
            dispatch(deleteCart(id));
            resolve();
        })
    }
});
const ShopCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShopCart);

export default ShopCartContainer;