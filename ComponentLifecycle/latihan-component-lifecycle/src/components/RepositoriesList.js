import React from 'react';
import PropTypes from 'prop-types';
import RepositoryItem from './RepositoryItem';
import { getRepositories } from '../utils/api';

class RepositoriesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            repositories: null
        };
    }

    async componentDidMount() {
        const repositories = await getRepositories(this.props.language);

        this.setState(() => {
            return {
                repositories
            };
        });
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.language !== this.props.language) {
            const repositories = await getRepositories(this.props.language);

            this.setState(() => {
                return {
                    repositories
                };
            });
        }
    }

    render() {
        if (this.state.repositories === null) {
            return <p>Loading ... </p>;
        }

        return (
            <div className="repositories-list">
                {this.state.repositories.map((repository) => {
                    return (
                        <RepositoryItem
                            key={`${repository.owner}/${repository.name}`}
                            name={repository.name}
                            owner={repository.owner}
                            description={repository.description}
                            url={repository.url}
                        />
                    );
                })}
            </div>
        );
    }
}

RepositoriesList.propTypes = {
    language: PropTypes.string.isRequired
};

export default RepositoriesList;
