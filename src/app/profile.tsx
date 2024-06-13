export default function Profile(){
    const person = {
        name:'John',
        age:'22',
        nationality:'Us',
        location:'canada',
    }
    return(
        <div>
            <h1>name: {person.name}</h1>
            <h1>age:{person.age}</h1>
            <h1>nationality:{person.nationality}</h1>
            <h1>location:{person.location}</h1>
        </div>
    )
}


