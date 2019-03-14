export const handleInputChange = function(event) {
    this.setState({
        [event.target.name]: event.target.value
    });
};

export const handleCheckboxChange = function(event) {
    this.setState({
        [event.target.name]: event.target.checked
    });
};