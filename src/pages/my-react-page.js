import React, {useEffect, useState, useRef} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Layout from '@theme/Layout';
import localAPI from '@site/static/swagger2.json';
import SwaggerUI from 'swagger-ui'
import "swagger-ui/dist/swagger-ui.css"
import Screenshot from '@theme/Screenshot';
import BrowserOnly from '@docusaurus/BrowserOnly';

const MyReactPage = () => {

    const swaggerNode = useRef()

    console.log(localAPI);
    
     const [displaySwagger, setDisplaySwagger ] = useState(false)

    const location = ExecutionEnvironment.canUseDOM ? window.location.href : null;

    useEffect(()=>{
        
            console.log('swaggerNode ', swaggerNode.current);
            setTimeout(() => {
                
                SwaggerUI({
    //   dom_id: '#testSwagger',
      domNode: swaggerNode.current,
      spec: localAPI
    // url: 'https://petstore.swagger.io/v2/swagger.json'
    })
            }, 1000);
            console.log(SwaggerUI);

            setDisplaySwagger(()=> true)
        
    }, [])
    return (
        <Layout>
            <div>
                <Screenshot/>
                displaySwagger: {displaySwagger ? <div>swagger on</div> : <div>swagger off</div>}
                 <BrowserOnly
      fallback={<div>The fallback content to display on prerendering</div>}>
      {() => {
        <div ref={swaggerNode}></div>
      }}
    </BrowserOnly>
                <div ref={swaggerNode}></div>
                
            </div>
        </Layout>
         );
}
 
export default MyReactPage;
