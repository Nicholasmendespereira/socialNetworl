import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

//font-providers
import "../../style/fontsProviders.css"
//styled-components
import { ContainerPost, NameProfile } from './style'

//images
import profile from '../../assets/profile-example.jpg'

// react icons
import { RxAvatar } from 'react-icons/rx'
import { TbPointFilled } from 'react-icons/tb'

function Post() {

    return (
        <>      
            <ContainerPost>
                <Stack direction="row" spacing={2} className="headerProfile">
                    <Avatar alt="Remy Sharp" src={profile} />
                    <NameProfile>
                        NameExample
                    </NameProfile>
                    <TbPointFilled className='iconPoint'/>
                    <small className='iconPoint'>5d</small>

                </Stack>
            </ContainerPost>
        </>
    )
}
export default Post;