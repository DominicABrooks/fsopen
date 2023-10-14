const Filter = ({ filter, setNewFilter }) => {
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h3>Filter</h3>
      <form>
        <div>
          <p>filter: <input value={filter} onChange={handleFilterChange}/></p>
        </div>
      </form>
    </div>
  );
}
  
export default Filter