export const handleInputChange = (event, Class) => {
    Class.setState({
        [event.target.name]: event.target.value
    });
};

export const handleCheckboxChange = (event, Class) => {
    Class.setState({
        [event.target.name]: event.target.checked
    });
};