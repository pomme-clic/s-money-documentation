import React, { useLayoutEffect, useEffect, useState } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import CustomDisclosure from '@theme/Disclosure'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import axios from 'axios'
import clsx from 'clsx'
import styles from './endpoint.module.css'

const getApiParameters = (response, path, method) => {
  // const responseParameters = response.data.paths[path][method]['parameters'][0]
  const responseParameters = response.data.paths[path][method]['parameters']
  console.log('responseParameters: ', responseParameters)

  return responseParameters

  // if ('schema' in responseParameters) {
  //   console.log('has $ref')
  //   const schemaKey = response.data.paths[path][method]['parameters'][0][
  //     'schema'
  //   ]['$ref']
  //     .split('/')
  //     .slice(-1)[0]

  //   return Object.entries(response.data.definitions[schemaKey]['properties'])
  // } else {
  //   console.log('has params')
  //   return Object.entries(responseParameters)
  // }

  return 'test getApiParameters'
}

const getApiColor = (type) => {
  const green = [
    'binary',
    'byte',
    'date',
    'email',
    'host',
    'ipv4',
    'password',
    'string',
    'string',
    'uri',
    'url',
    'uuid',
  ]
  const purple = ['enum']
  const blue = ['integer']
  const orange = ['boolean']

  if (green.includes(type)) return 'green'
  if (blue.includes(type)) return 'blue'
  if (purple.includes(type)) return 'purple'
  if (orange.includes(type)) return 'orange'
  return '#cccccc'
}

const Endpoint = ({ apiUrl, path, method }) => {
  const { siteConfig } = useDocusaurusContext()
  const {
    themeConfig: { baseAPIUrl },
  } = siteConfig
  const fullAPIUrl = `${baseAPIUrl}${apiUrl}`

  const [open, setOpen] = useState(false)
  const [parameters, setParameters] = useState([])

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      axios
        .get(fullAPIUrl)
        .then(function (response) {
          console.log(response)
          console.log(
            'getApiParameters: ',
            getApiParameters(response, path, method),
          )

          setParameters((prevState) => getApiParameters(response, path, method))
        })
        .catch(function (error) {
          console.log(error)
        })
    }

    return () => {
      setParameters([])
    }
  }, [])

  return (
    <div className="mt-4">
      <CustomDisclosure title={apiUrl} type="API" method={method}>
        <div className="">
          {parameters.map((param, i) => {
            console.log(param)
            const paramName = param.name
            const paramType = param.schema['type']
            // const paramType = props[1]['type']
            // const paramDescription = props[1]['description']

            return (
              <div key={`${i}`}>params</div>
              // <div
              //   className={clsx('w-full border-xp-grey-300 py-4', {
              //     'border-t': i !== 0,
              //   })}
              //   key={`${paramName}${i}`}
              // >
              //   <div className="flex items-center space-x-2 text-black">
              //     <div className="font-semibold">{paramName}</div>
              //     <div className="w-1 h-1 rounded-full bg-xp-grey-700"></div>
              //     <div
              //       className={clsx({
              //         'text-api-green': getApiColor(paramType) === 'green',
              //         'text-api-blue': getApiColor(paramType) === 'blue',
              //         'text-api-purple': getApiColor(paramType) === 'purple',
              //         'text-api-orange': getApiColor(paramType) === 'orange',
              //       })}
              //     >
              //       {paramType}
              //     </div>
              //   </div>
              //   {paramDescription && (
              //     <div className="mt-2 text-sm text-xp-grey-700">
              //       {paramDescription}
              //     </div>
              //   )}
              // </div>
            )
          })}
        </div>
      </CustomDisclosure>
    </div>
  )
}

export default Endpoint
