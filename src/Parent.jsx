import React from 'react';
import Nave from './Component/Nave';
import Page from './Component/Page';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';


const Parent = () => {
  return (
    <div>
        <Nave/>
    <Sidebar/> 
    <Content/> 
    <Page/>
    </div>
  )
}

export default Parent
