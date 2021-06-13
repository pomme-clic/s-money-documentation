import React, {useEffect, useState, useRef} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Layout from '@theme/Layout';
import localAPI from '@site/static/swagger2.json';
import SwaggerUI from 'swagger-ui'
import "swagger-ui/dist/swagger-ui.css"

const MyReactPage = () => {

    const swaggerNode = useRef()

    console.log(localAPI);
    
     const [displaySwagger, setDisplaySwagger ] = useState(false)

    const location = ExecutionEnvironment.canUseDOM ? window.location.href : null;

    useEffect(()=>{
        setTimeout(() => {
            console.log('swaggerNode ', swaggerNode.current);
            
            console.log(SwaggerUI);
            SwaggerUI({
//   dom_id: '#testSwagger',
  domNode: swaggerNode.current,
  spec: localAPI
// url: 'https://petstore.swagger.io/v2/swagger.json'
})

            setDisplaySwagger(()=> true)
        }, 3000);
    }, [])
    return (
        <Layout>
            <div>
                displaySwagger: {displaySwagger ? <div>swagger on</div> : <div>swagger off</div>}
                <div ref={swaggerNode}></div>
            </div>
        </Layout>
         );
}
 
export default MyReactPage;
