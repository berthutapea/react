import PropTypes from 'prop-types';

function Row({ label, children }) {
    return (
        <div className="row">
            <label>{label}</label>
            <div className="row__content">{children}</div>
        </div>
    );
}

Row.propTypes = {
    label: PropTypes.string.isRequired
};

export default Row;
