type statusProps = {
    status: 'loading' | 'success' | 'error'
};


export const Status = (props: statusProps) => {
    let message = '';

    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Data fetched successfully...'
    } else {
        message = 'Error fetching data...'
    }
    return (
        <div>
            {/* <h2>Loading</h2>
            <h2>Data fetched successfully</h2>
            <h2>Error fetching data</h2> */}
            {
                message
            }

        </div>
    )
}