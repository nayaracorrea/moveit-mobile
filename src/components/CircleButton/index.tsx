import React from 'react';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { Button } from './styles';

export default ({
    click, icon, sizeIcon, color
}) => (
    <>
        <Button onPress={click}>
            <Icon name={icon} size={sizeIcon} color={color} />
        </Button>
    </>
);
