type GreetProps = {
    name: String,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <>
        {
            props.isLoggedIn ? <div> Welcome {props.name} with {props.messageCount} followers</div> : "Welcome guest"
        }
        </>
    )
}