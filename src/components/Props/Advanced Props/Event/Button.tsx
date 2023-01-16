type ButtonProps = {
    // handleClick: () => void
    handleClickEvent: (event: React.MouseEvent<HTMLButtonElement>, id?: number) => void
}
export const Button = (props: ButtonProps) => {
    return (
        <>
            {/* <button onClick={props.handleClick}>Click Me</button> */}
            <button onClick={props.handleClickEvent}>Click Me</button>
            {/* <button onClick={event => props.handleClickEvent(event, 1)}>Click Me</button> */}
        </>
    )
}