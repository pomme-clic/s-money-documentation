import React, {useRef} from 'react';
import Layout from '@theme/Layout';
// import localAPI from '@site/static/swagger2.json';
import "swagger-ui/dist/swagger-ui.css"
import Screenshot from '@theme/Screenshot';

const MyReactPage = () => {
    
    // const swaggerNode = useRef()

    //  if (typeof window !== "undefined") {
                     
    //     const SwaggerUI = require('swagger-ui')
    //     SwaggerUI({
    //         domNode: swaggerNode.current,
    //         spec: localAPI
    //     })
    // }

    return (
        <Layout>
            <div>
                <Screenshot/>
                {/* <div ref={swaggerNode}></div> */}
            </div>
        </Layout>
         );
}
 
export default MyReactPage;
