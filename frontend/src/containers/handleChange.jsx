const handleChange = (event, Class) => {
    Class.setState({
        [event.target.name]: event.target.value
    });
};

export default handleChange;