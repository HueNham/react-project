import React from 'react'

import s from './Account.module.scss'

const Greeting: React.FC = () => {
    return (
      <div className={s.greeting_container}>
          <span className={s.greeting}>Welcome !</span>
      </div>
    )
}

export default Greeting