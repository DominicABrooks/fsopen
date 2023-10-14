const NewEntry = ({newName, setNewName, newNumber, setNewNumber, persons, setPersons}) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    
    const handleFormSubmission = (event) => {
        event.preventDefault()
        console.log("New Name: ", newName)
        console.log("New Number: ", newNumber)

        let nameNotAdded = true, numberNotAdded = true;

        console.log("New Name Not Added: ", nameNotAdded)
        console.log("New Number Not Added: ", numberNotAdded)
        persons.forEach(({name, number}) => {
            console.log("name: ", name)
            console.log("number: ", number)
            if(name == newName)
                nameNotAdded = false;
            if(number == newNumber)
                numberNotAdded = false;
        })
        console.log("New Name Not Added: ", nameNotAdded)
        console.log("New Number Not Added: ", numberNotAdded)

        if(nameNotAdded && numberNotAdded)
        {
            const copiedPersons = [...persons];
            copiedPersons.push({ name: newName, number: newNumber, id: copiedPersons.length + 1})
            setPersons(copiedPersons);
        }
        else if(!nameNotAdded && !numberNotAdded)
        {
            alert(`${newName} and ${newNumber} have already been added to phonebook`)
        }
        else if(!numberNotAdded)
        {
            alert(`${newNumber} is already added to phonebook`)
        }
        else if(!nameNotAdded)
        {
            alert(`${newName} is already added to phonebook`)
            
        }
    }

    return (
        <div>
        <h3>Add a new</h3>
        <form onSubmit = {handleFormSubmission}>
        <div>
            <p>name: <input value={newName} onChange={handleNameChange}/></p>
            <p>number: <input value={newNumber} onChange={handleNumberChange}/></p>
            <button type="submit">add</button>
        </div>
        </form>
        </div>
    );
}

export default NewEntry
