import React, { useLayoutEffect, useEffect, useState } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import CustomDisclosure from '@theme/Disclosure'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import axios from 'axios'
import clsx from 'clsx'
import Loader from '@theme/Loaders'

const sanitizeString = (string) => {
  return string
    .split('')
    .filter((letter) => {
      return letter.charCodeAt(0) !== 8203
    })
    .join('')
}

const getApiParameters = (response, path, method) => {
  const responseParameters =
    response.data.paths[sanitizeString(path)][method]['parameters']
  return responseParameters
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
    'String',
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
          console.log(getApiParameters(response, path, method))
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
      <CustomDisclosure title={path} type="API" method={method}>
        {Array.isArray(parameters) && parameters.length ? (
          <div className="parameters">
            {parameters.map((param, i) => {
              console.log(param)
              const paramName = param.name
              const paramType = param.schema['type']
              const paramDescription = param.description || null
              const isParamaRequired = param.required || null

              return (
                <div
                  className={clsx('w-full border-xp-grey-300 py-4', {
                    'border-t': i !== 0,
                  })}
                  key={`${paramName}${i}`}
                >
                  <div className="flex items-center space-x-2 text-black">
                    <div className="font-semibold">
                      {paramName}
                      {isParamaRequired && (
                        <span className="inline-block text-red-500 ">*</span>
                      )}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-xp-grey-700"></div>
                    <div
                      className={clsx({
                        'text-api-green': getApiColor(paramType) === 'green',
                        'text-api-blue': getApiColor(paramType) === 'blue',
                        'text-api-purple': getApiColor(paramType) === 'purple',
                        'text-api-orange': getApiColor(paramType) === 'orange',
                      })}
                    >
                      {paramType}
                    </div>
                  </div>
                  {paramDescription && (
                    <div className="mt-2 text-sm text-xp-grey-700">
                      {paramDescription}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center my-2">
            <Loader />
          </div>
        )}
      </CustomDisclosure>
    </div>
  )
}

export default Endpoint
