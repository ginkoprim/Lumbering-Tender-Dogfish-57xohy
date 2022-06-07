import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Lumbering Tender Dogfish</title>
        <meta property="og:title" content="Lumbering Tender Dogfish" />
      </Helmet>
    </div>
  )
}

export default Home
