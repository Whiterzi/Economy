import { useState } from "react";
import { useParams  } from 'react-router-dom';

import GeneralParameters from "../../components/GeneralParamters";

const page2List = [
    {
        name: 'list-1',
        desc: 'this is list-1'
    }, {
        name: 'list-2',
        desc: 'this is list-2'
    }, {
        name: 'list-3',
        desc: 'this is list-3'
    }
  ]
  
  const Page2ListContent = () => {
    let params = useParams();
    let parameters = page2List.find(data => data.name === params.list);
    
    return parameters ? <h2>Invoice: {parameters.name} + {parameters.desc }</h2> : <div></div>;
    }
  

export default Page2ListContent;