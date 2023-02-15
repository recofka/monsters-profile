import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardList = ({ monstersList }) => {
    return (
        <div>
            {monstersList.map((monster) => {
                return <Card key={monster.id} monster={monster} />;
            })}
        </div>
    );
};

CardList.prototype = {
    monstersList: PropTypes.object
};

export default CardList;
