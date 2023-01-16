// type nameList = {
//     names: {
//         first: string,
//         last: string
//     }[]
// }
import { nameList } from '../Person.types' 
export const PersonList = (props: nameList) => {
    return (
        <div>
           {
               props.names.map(name => (
                   <h2>{name.first} {name.last}</h2>
               ))
           }
        </div>
    )
}