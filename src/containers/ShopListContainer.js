import { connect } from 'react-redux';
import ShopList from '../components/ShopList';

const mapStateToProps = state => ({
    listState: state
});

const ShopListContainer = connect(mapStateToProps)(ShopList);

export default ShopListContainer;