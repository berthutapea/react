// const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];
// const uppercaseNames = names.map((name) => name.toUpperCase());

// console.log(uppercaseNames);

function Contacts() {
    const names = ['Asep', 'Alex', 'Bagus', 'Cika', 'Doni'];

    return (
        <ol className='contacts'>
            {names.map((name) => <li>{name}</li>)}
        </ol>
    );
}

export default Contacts;