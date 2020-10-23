import { connect } from 'react-redux';
import ProjectShow from '../projects/ProjectShow';
import { fetchBackings } from '../../actions/backings_actions';

const mapStateToProps = (state, ownProps) => {
    const backings = Object.values(state.entities.backings)

    return {
        backings: backings,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBackings: () => dispatch(fetchBackings()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow)