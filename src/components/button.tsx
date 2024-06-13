
// props is object



export default function Button(props) {
    
    return(
        <button onClick={props.onClick}className="px-3 py-3 bg-green-600 text-white rounded text-sm font-medium">{props.title}</button>
    )
}
