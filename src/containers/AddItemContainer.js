import { connect } from 'react-redux';
import AddItem from '../components/AddItem';
import { addItem } from '../actions';

const mapStateToProps = state => ({
    listState: state
})
const mapDispatchToProps = dispatch => ({
    onAdd: payload => dispatch(addItem(params))
});

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(addItem);

export default AddItemContainer;