import React, {useContext} from 'react'
import { UserContext } from '../../../App';
import { ChannelContext } from '../../../App';

function ComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            {/* <UserContext.Consumer>
                {
                    (name) => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    (channel) => {
                                        return <div>Welcome {name} and thanks for subscribing to {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}
            {user} -- {channel}
        </div>
    )
}

export default ComponentF
