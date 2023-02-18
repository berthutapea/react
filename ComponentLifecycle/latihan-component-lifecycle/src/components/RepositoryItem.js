import React from 'react';
import PropTypes from 'prop-types';

function RepositoryItem({ owner, name, description, url }) {
    return (
        <div className="repository-item">
            <h3 className="repository-item__name">
                <a href={url} target="_blank" rel="noreferrer">{`${owner}/${name}`}</a>
            </h3>
            <p className="repository-item__owner">by {owner}</p>
            <p className="repository-item__description">{description}</p>
        </div>
    );
}

RepositoryItem.propTypes = {
    owner: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default RepositoryItem;
