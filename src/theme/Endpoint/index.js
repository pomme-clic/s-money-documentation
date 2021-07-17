import React, { useLayoutEffect, useEffect, useState } from 'react'
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import axios from 'axios'

const Endpoint = ({ apiUrl, method, path }) => {
  const [parameters, setParameters] = useState([])

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      console.log(apiUrl)

      axios
        .get(apiUrl)
        .then(function (response) {
          const schemaKey = response.data.paths[path][method]['parameters'][0][
            'schema'
          ]['$ref']
            .split('/')
            .slice(-1)[0]

          setParameters((prevState) =>
            Object.entries(response.data.definitions[schemaKey]['properties']),
          )

          console.log(parameters)
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
    <div>
      {/* Route */}
      <div className="flex items-center px-5 py-4 space-x-4 bg-gray-300 rounded">
        {/* Method */}
        <div className="px-3 py-1 text-xs font-bold text-white uppercase bg-blue-500 rounded">
          {method}
        </div>
        {/* Path */}
        <div className="text-sm text-black">{`${apiUrl}${path}`}</div>
      </div>

      {/* Parameters */}
      <div className="mt-4 space-y-4">
        {parameters.map((props, i) => {
          return (
            <div className="bg-gray-700" key={`${props[0]}${i}`}>
              {/* Key + type */}
              <div className="text-white">
                {props[0]} . {props[1]['type']}
              </div>
              {/* Description */}
              {props[1]['description'] && <div>{props[1]['description']}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Endpoint
