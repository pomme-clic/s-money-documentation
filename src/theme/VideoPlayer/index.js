import React from 'react'
import ReactPlayer from 'react-player'
import styles from './styles.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl'

const VideoPlayer = ({ type, src, width, height }) => {
  const setRatio = `${(height / width) * 100}%`
  // const urlByType = {type ===}

  return (
    <>
      <div className={styles.playerWrapper} style={{ paddingTop: setRatio }}>
        {type === 'local' && (
          <ReactPlayer
            className={styles.reactPlayer}
            controls
            url={useBaseUrl(`/img/content/${src}`)}
            width="100%"
            height="100%"
          />
        )}

        {type === 'remote' && (
          <ReactPlayer
            className={styles.reactPlayer}
            controls
            url={src}
            width="100%"
            height="100%"
          />
        )}
      </div>
    </>
  )
}

export default VideoPlayer
