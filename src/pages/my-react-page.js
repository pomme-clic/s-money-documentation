import React, {useRef} from 'react';
import Layout from '@theme/Layout';
import "swagger-ui/dist/swagger-ui.css"
import Screenshot from '@theme/Screenshot';
import SwaggerUI from '@theme/SwaggerUI';

const MyReactPage = () => {
  
    return (
        <Layout>
            <div>
                <Screenshot/>
                <SwaggerUI/>
                </div>
        </Layout>
         );
}
 
export default MyReactPage;
