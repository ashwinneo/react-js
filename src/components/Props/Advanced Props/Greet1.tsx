//Optional Type
type GreetProps = {
    name: String,
    messageCount?: number,
    isLoggedIn: boolean
}

export const Greet1 = (props: GreetProps) => {
    const { messageCount = 0 } = props;
    return (
        <>
        {
            props.isLoggedIn ? <div> Welcome {props.name} with {messageCount} followers</div> : "Welcome guest"
        }
        </>
    )
}