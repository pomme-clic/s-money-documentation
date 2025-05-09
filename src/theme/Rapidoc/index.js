import React, { useRef, useEffect, useState } from 'react'
import Head from '@docusaurus/Head'

//import useThemeContext from '@theme/hooks/useThemeContext'
import { useColorMode } from '@docusaurus/theme-common'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loader from '@theme/Loaders'
import './styles.module.css'

const customThemeColors = {
  'darkmode-background': '#121E24',
  'xp-primary-500': '#FFCC00',
  'xp-tertiaries': {
    'primary-ciel': '#63C2C7',
    'secondary-blue': '#006D8C',
  },
}

const Rapidoc = ({ apiUrl, apiUrls = [], isRelative }) => {
  const [selectedApi, setSelectedApi] = useState(
    apiUrls.length === 0 ? apiUrl : apiUrls[0].apiUrl
  );  
  
  const [selectedVersion, setSelectedVersion] = useState(
    apiUrls.length === 0 ? "" : apiUrls[0].version
  );
  
  const [selectedMessage, setSelectedMessage] = useState(
    (apiUrls.length > 0 && apiUrls[0].message) ?? ""
  );  
  
//  console.log('apiUrls[0].apiUrl : ', apiUrls[0].apiUrl)
  ////  console.log('apiUrls[0].apiUrl : ', apiUrls[0].apiUrl)
  //console.log('apiUrls:', apiUrls);
  //console.log('selectedApi:', selectedApi);  
  //console.log('selectedVersion:', selectedVersion); 
  
  const handleApiChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedApi(selectedValue);
    const selectedVersion = apiUrls.find((url) => url.apiUrl === selectedValue)?.version || '';
    setSelectedVersion(selectedVersion);
    const selectedMessage = apiUrls.find((url) => url.apiUrl === selectedValue)?.message || '';
    setSelectedMessage(selectedMessage); 
    console.log('selectedMessage:', selectedMessage);     
  };  
  
  const { isDarkTheme } = useColorMode()
  //const { isDarkTheme } = useThemeContext()
  const { siteConfig } = useDocusaurusContext()


  const serverUrl = siteConfig.themeConfig.serverUrl
  const tryoutsServerUrl = 'https://sb-api.xpollens.com'

  {/*const addCustomElement = () => {
    const customElement = document.createElement('div');
    customElement.innerHTML = '<p>This is a custom element</p>';

    // Append the custom element to the container (or wherever you want it)
    document.body.appendChild(customElement);
  };*/}

  // Rapidoc rendering
  const rapidocRef = useRef()
  const [renderRapidoc, setRenderRapidoc] = useState(false)

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      require('rapidoc')
    }
  }, [])

  // React Query
  const fetchAPI = async () => {
    const fullAPIUrl = isRelative
      ? `${serverUrl}/swagger/docs${selectedApi}`
      : selectedApi

    console.log('fullAPIUrl: ', fullAPIUrl)
    console.log(selectedApi)

    try {
      const response = await axios.get(fullAPIUrl)
      return response.data
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const { isLoading, isError, data, error } = useQuery(
    ['fetchAPI', { selectedApi }],
    fetchAPI,
    {
      retry: false,
      retryOnMount: false,
      refetchOnWindowFocus: false,
    },
  )

  // Rapidoc parsing
  const loadRapidocSpec = async (stringifiedData) => {
    await rapidocRef.current.loadSpec(stringifiedData)
    rapidocRef.current.shadowRoot.querySelector('#auth .m-btn').click()
  }

  useEffect(() => {
    if (data) {
      data.components.securitySchemes['Sts authentication']['x-client-id'] =
        'Demo'
      data.components.securitySchemes['Sts authentication']['x-client-secret'] =
        'Demo'
      
    // Add deprecation warnings
    // Find the dynamic key in the paths
    var callbackUrlKey = Object.keys(data.paths).find((key) =>
      key.includes("{callback20Url}")
    );

    if (callbackUrlKey && data.paths[callbackUrlKey].post) {
      // Append the new deprecation message to the existing description
      data.paths[callbackUrlKey].post.description +=
        "<br/><font color=red>**⚠️ This callback will be deprecated and will be replaced by the new `cardOperationCreatedOrUpdated` callback**</font>";
    }   
      
    callbackUrlKey = Object.keys(data.paths).find((key) =>
      key.includes("{callback16Url}")
    );
    if (callbackUrlKey && data.paths[callbackUrlKey].post) {
      // Append the new deprecation message to the existing description
      data.paths[callbackUrlKey].post.description +=
        "<br/><font color=red>**⚠️ This callback will be deprecated and will be replaced by the new `SepaCreditTransferCreatedOrUpdated` callback**</font>";
    }       
    callbackUrlKey = Object.keys(data.paths).find((key) =>
      key.includes("{callback17Url}")
    );
    if (callbackUrlKey && data.paths[callbackUrlKey].post) {
      // Append the new deprecation message to the existing description
      data.paths[callbackUrlKey].post.description +=
        "<br/><font color=red>**⚠️ This callback will be deprecated and will be replaced by the new `SepaCreditTransferCreatedOrUpdated` callback**</font>";
    }       

    callbackUrlKey = Object.keys(data.paths).find((key) =>
      key.includes("{callback38Url}")
    );
    if (callbackUrlKey && data.paths[callbackUrlKey].post) {
      // Append the new deprecation message to the existing description
      data.paths[callbackUrlKey].post.description +=
        "<br/><font color=red>**⚠️ This callback will be deprecated and will be replaced by the new `InstantPaymentCreatedOrUpdated` callback**</font>";
    }       
    callbackUrlKey = Object.keys(data.paths).find((key) =>
      key.includes("{callback39Url}")
    );
    if (callbackUrlKey && data.paths[callbackUrlKey].post) {
      // Append the new deprecation message to the existing description
      data.paths[callbackUrlKey].post.description +=
        "<br/><font color=red>**⚠️ This callback will be deprecated and will be replaced by the new `InstantPaymentCreatedOrUpdated` callback**</font>";
    }     callbackUrlKey = Object.keys(data.paths).find((key) =>
      key.includes("{callback41Url}")
    );
    if (callbackUrlKey && data.paths[callbackUrlKey].post) {
      // Append the new deprecation message to the existing description
      data.paths[callbackUrlKey].post.description +=
        "<br/><font color=red>**⚠️ This callback will be deprecated and will be replaced by the new `InstantPaymentCreatedOrUpdated` callback**</font>";
    }       
    callbackUrlKey = Object.keys(data.paths).find((key) =>
      key.includes("{callback42Url}")
    );
    if (callbackUrlKey && data.paths[callbackUrlKey].post) {
      // Append the new deprecation message to the existing description
      data.paths[callbackUrlKey].post.description +=
        "<br/><font color=red>**⚠️ This callback will be deprecated and will be replaced by the new `InstantPaymentCreatedOrUpdated` callback**</font>";
    }  

    callbackUrlKey = Object.keys(data.paths).find((key) =>
      key.includes("{callback24Url}")
    );
    if (callbackUrlKey && data.paths[callbackUrlKey].post) {
      // Append the new deprecation message to the existing description
      data.paths[callbackUrlKey].post.description +=
        "<br/><font color=red>**⚠️ This callback will be deprecated and will be replaced by the new `CardOperationCreatedOrUpdated` callback**</font>";
    }      

      const stringifiedData = JSON.stringify(data)

      if (rapidocRef.current) {
        loadRapidocSpec(JSON.parse(stringifiedData))

        const handleRenderRapidoc = (e) => {
          setRenderRapidoc(true)
        }

        rapidocRef.current.addEventListener(
          'before-render',
          handleRenderRapidoc,
        )

        setRenderRapidoc(true)

        // Cleanup
        return () => {
          rapidocRef.current.removeEventListener(
            'before-render',
            handleRenderRapidoc,
          )
        }
      }
    }
  }, [data])

  return (
    <>
      <Head>
        <link rel="canonical" href="https://docs.xpollens.com/" />
        <style>{'body { overflow: visible; }'}</style>
        <body className="api"></body>
      </Head>

      <div className="flex items-center justify-start p-5 lg:p-0">
        {/* justify-center */}
        {(isLoading || (!renderRapidoc && !isError)) && (
          <div className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Loader />
            <div className="mt-4 font-semibold ">Fetching API...</div>
          </div>
        )}
        {isError && (
          <div className="absolute flex flex-col items-center text-red-500 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="font-bold ">Error: </div>
            <div>{error.message}</div>
          </div>
        )}
        <div
          className="w-full"
          style={{
            visibility:
              !renderRapidoc || isError || isLoading ? 'hidden' : 'visible',
          }}
        >
        
        {/*<div>
        <button onClick={addCustomElement}>Add Custom Element</button>
        </div> */}

        {/* Combo box for selecting API URLs and versions */}
        {apiUrls.length > 0 && (
          <div className="mt-4 font-poppins font-semibold flex items-center justify-end space-x-2 mr-4">
          <label htmlFor="apiSelector">SELECT API VERSION:</label>
          <select 
            id="apiSelector" 
            value={selectedApi} 
            onChange={handleApiChange} 
            className="p-2 rounded border border-green-300 font-fira-code"
            style={{
              padding: '8px', // Adjust as needed
              borderRadius: '8px', // For rounded corners
              border: '2px solid #B4E2C2', // Light pastel green border
              fontFamily: 'Fira Code', // Change the font family
              // Add more styles as needed
            }}>
            {apiUrls.map((record) => (
              <option 
                className="p-2 rounded border border-green-300 font-fira-code"
                key={record.version} 
                value={record.apiUrl}
                style={{
                  fontFamily: 'Fira Code', // Change the font family
                  //fontSize: '30px'
                  // Add more styles as needed
                }}>
                {record.version}
              </option>
            ))}
          </select>
          {selectedMessage !== "" && (
          <div
            style={{
              //backgroundColor: 'lightgray',
              border: '1px solid gray',
              padding: '8px', // Adjust as needed
              borderRadius: '8px', // For rounded corners  
              fontFamily: 'Fira Code', // Change the font family
              //marginTop: '5px', // Adjust as needed
              display: 'inline-block', // Make the background and border cover only the content
            }}
          >
            <font className="text-xs">{selectedMessage}</font>
          </div>
          )}
        </div>
        )}       
        
        <rapi-doc
            ref={rapidocRef}
            theme={isDarkTheme ? 'dark' : 'light'}
            bg-color={
              isDarkTheme ? customThemeColors['darkmode-background'] : '#fff'
            }
            nav-bg-color={isDarkTheme ? '#081014' : '#f7f7f7'}
            nav-text-color={isDarkTheme ? '#ffffff' : '#000000'}
            nav-accent-color={
              isDarkTheme
                ? customThemeColors['xp-tertiaries']['primary-ciel']
                : customThemeColors['xp-tertiaries']['secondary-blue']
            }
            nav-item-spacing="relaxed"
            layout="row"
            sort-tags="true"
            render-style="read"
            load-fonts="false"
            regular-font="Poppins"
            show-method-in-nav-bar="as-colored-text"
            primary-color="#63C2C7"
            sort-endpoints-by="summary"
            schema-description-expanded="true"
            allow-server-selection="true"
            server-url={tryoutsServerUrl}
            default-api-server={tryoutsServerUrl}
            show-header="false"
            show-info="false"
            show-components="false"
            allow-api-list-style-selection="false"
            style={{
              height: 'calc(100vh - 60px)',
              width: '100%',
              maxWidth: '100%',
            }}
          >
          </rapi-doc>
        </div>
      </div>
    </>
  )
}

export default Rapidoc
