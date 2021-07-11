const Filter = ({ filterByName }) => {
    return (
        <div>
            <label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" id="filter" onChange={filterByName} />
        </div>);
};


export default Filter;