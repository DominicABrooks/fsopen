const Numbers = ({persons, filter}) => (
        <div>
        <h3>Numbers</h3>
        {persons.map((person, index) => 
            {
            const personToLower = person.name.toLowerCase();
            const filterToLower = filter.toLowerCase();
            if(personToLower.includes(filterToLower) || filter == "")
            {
                return (
                <p key={index}>{person.name} {person.number}</p>
                );
            }
            }
        )
        }
        </div>
)

export default Numbers