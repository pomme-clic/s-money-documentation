import React, {useLayoutEffect, useState, useRef} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Layout from '@theme/Layout';
import localAPI from '@site/static/swagger2.json';
// import SwaggerUI from 'swagger-ui'
import "swagger-ui/dist/swagger-ui.css"
import Screenshot from '@theme/Screenshot';
// import BrowserOnly from '@docusaurus/BrowserOnly';

function BrowserOnly({
  children,
  fallback,
}) {
  if (!ExecutionEnvironment.canUseDOM || children == null) {
    return fallback || null;
  }

  return <>{children()}</>;
}

const MyReactPage = () => {

    const swaggerNode = useRef()

    console.log(localAPI);
    
     const [displaySwagger, setDisplaySwagger ] = useState(false)

    const location = ExecutionEnvironment.canUseDOM ? window.location.href : null;

    useLayoutEffect(()=>{
        
            console.log('swaggerNode ', swaggerNode.current);
            setTimeout(() => {

                 if (typeof window !== "undefined") {
                     console.log('window: ',window);
                     const SwaggerUI = require('swagger-ui')
     SwaggerUI({
    
      domNode: swaggerNode.current,
      spec: localAPI
    // url: 'https://petstore.swagger.io/v2/swagger.json'
    })
  }
                

              
            }, 1000);
            // console.log(SwaggerUI);

            
            
        
    }, [])
    return (
        <Layout>
            <div>
                <Screenshot/>
                displaySwagger: {displaySwagger ? <div>swagger on</div> : <div>swagger off</div>}

                <BrowserOnly>
                    {() => {
                        return (
                            ExecutionEnvironment.canUseDOM ? <div ref={swaggerNode}></div> : (<div>rien</div>)
                        ) 
                    }}
                </BrowserOnly>
              
                {/* <div ref={swaggerNode}></div> */}
                
            </div>
        </Layout>
         );
}
 
export default MyReactPage;
