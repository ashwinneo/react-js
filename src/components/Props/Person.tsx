// type PersonType = {
//     name: {
//         first: string,
//         last: string
//     }
// }
import { PersonProps } from "../Person.types"

// export const Person = (props: PersonType) => {
//     return <div>{props.name.first} {props.name.last}</div>
// }

export const Person = (props: PersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}