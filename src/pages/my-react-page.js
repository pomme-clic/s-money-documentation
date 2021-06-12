import React, {useEffect, useState} from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Layout from '@theme/Layout';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import localAPI from '@site/static/openapi.json';

const MyReactPage = () => {
    console.log(localAPI);
     const [displaySwagger, setDisplaySwagger ] = useState(false)
    // const renderer = () => {
    //     return (<SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />)
    // })

    const location = ExecutionEnvironment.canUseDOM ? window.location.href : null;

    useEffect(()=>{
        setTimeout(() => {
            console.log('test use');
            setDisplaySwagger(()=> true)
            // renderer(true)
        }, 3000);
    }, [])
    return (
        <Layout>
            <div>
                displaySwagger: {displaySwagger ? <div>swagger on</div> : <div>swagger off</div>}
                {/* {ExecutionEnvironment.canUseDOM ? <SwaggerUI spec="https://petstore.swagger.io/v2/swagger.json" /> : <div>rien</div> } */}
                {/* {displaySwagger ? <SwaggerUI spec="https://petstore.swagger.io/v2/swagger.json" /> : <div>rien</div>} */}
                {displaySwagger ? <SwaggerUI spec={localAPI} /> : <div>rien</div>}

            
            </div>
        </Layout>
         );
}
 
export default MyReactPage;
