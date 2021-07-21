import React, { useState } from 'react'
import { View } from 'react-native';
import { Card } from 'react-native-paper';

import { KeyBox } from './KeyBox'
import { ModeBox } from './ModeBox'


export function ToolPage () {
    const [currOption, setOption] = useState(true);
   
    return(
        <Card style={{backgroundColor: 'pink'}}>
                <KeyBox currOption={!currOption}/>
            
                {/* <ModeBox setOption={setOption}/> */}
        </Card>
    )
}