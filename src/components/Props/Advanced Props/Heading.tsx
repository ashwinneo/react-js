type headingProp = {
    children: string
}

export const Heading = (props: headingProp) => {
    return <h2>{props.children}</h2>
};