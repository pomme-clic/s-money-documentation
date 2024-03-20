import React, { useEffect, useState } from 'react'
import Head from '@docusaurus/Head'
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loader from '@theme/Loaders'
import './styles.module.css'

const CustomPage = ({ apiUrl, isRelative }) => {
  const [selectedApi, setSelectedApi] = useState(
    apiUrl
  );  
  
  const handleApiChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedApi(selectedValue);
  };  
  
  const { isDarkTheme } = useColorMode()
  const { siteConfig } = useDocusaurusContext()


  const serverUrl = 'https://api.xpollens.com' //siteConfig.themeConfig.serverUrl

  const fetchAPI = async () => {
    const fullAPIUrl = isRelative
      ? `${serverUrl}/${selectedApi}`
      : selectedApi

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
  
  const getStatusColor = (status) => {
    return status === 'Healthy' ? 'green' : 'red';
  }
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
        <div>
          <p>Status: <span style={{ color: getStatusColor(data.status) }}>{data.status}</span></p>
          <p>Total Duration: {data.totalDuration}</p>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>&nbsp;</th>
                <th>Status</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data.entries).map(([key, entry]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: getStatusColor(entry.status),
                        margin: 'auto', // Center align the status div
                      }}
                    />                  
                   </td>
                  <td style={{ color: getStatusColor(entry.status) }}>
                    <span style={{ color: getStatusColor(entry.status) }}>{entry.status}</span>
                   </td>
                  <td>{entry.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>          
    </div>
  );  
}

export default CustomPage
