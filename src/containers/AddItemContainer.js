import { connect } from 'react-redux';
import AddItem from '../components/AddItem';
import { addItem } from '../actions';

const mapStateToProps = state => ({
    listState: state
})
const mapDispatchToProps = dispatch => ({
    onAdd: (name, price, imgSrc) => dispatch(addItem(name, price, imgSrc))
});

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem);

export default AddItemContainer;