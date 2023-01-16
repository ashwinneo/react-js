type ContainerProps = {
    styles: React.CSSProperties
};

export const Container = (props: ContainerProps) => {
    return (
        <>
            <div style={{ border: '1px solid black', padding: '1rem' }}>
                <h2>Ashwin</h2>
            </div>
            <div style={props.styles}>
                <h2>Ashwin</h2>
            </div>
        </>
    )
}