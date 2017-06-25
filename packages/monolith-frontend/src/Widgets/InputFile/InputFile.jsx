import React from 'react';
import PropTypes from 'prop-types';

/**
 * This module allows you to insert an InputFile.
 * @module InputFile
 * @param props {Object} Properties of the component
 * @param props.id {string} The file's ID
 * @returns {React.Component}
 * @constructor
 */
export default function InputFile(props) {
    return (<input type="file" id={props.id} />);
}

InputFile.propTypes = {
    id: PropTypes.string.isRequired,
};
