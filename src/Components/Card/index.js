import React from 'react'
import { Panel, PanelGroup } from 'rsuite';

export default function({imgPanel, titleDescription }){
    return(
    <>
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 150, textAlign:'center', margin:'10px', paddingTop:20 }}>
            <img src={imgPanel} height="95" width="95" />
        <Panel>
            {titleDescription}
        </Panel>
      </Panel>   
    </>
    )
}
