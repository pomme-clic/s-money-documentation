import React, {useRef, useLayoutEffect} from 'react';
import localAPI from '@site/static/swagger2.json';
import "swagger-ui/dist/swagger-ui.css"

const SwaggerUI = () => {

    const swaggerNode = useRef()

    useLayoutEffect(()=>{
             if (typeof window !== "undefined") {
                     
        const SwaggerUI = require('swagger-ui')
        SwaggerUI({
            domNode: swaggerNode.current,
            spec: localAPI
        })
    }
    }, [])



    return ( 

        <div ref={swaggerNode}></div>
     );
}
 
export default SwaggerUI;