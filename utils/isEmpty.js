const isEmpty = (input) => {
    return (
        input === undefined ||
        input === null ||
        typeof(input) === 'string' && input === '' ||
        typeof(input) === 'object' && Object.keys(input).length === 0 
    )
}

module.exports = isEmpty;