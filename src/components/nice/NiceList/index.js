
import {
  Table
} from 'antd'

import styles from './style.less'

const NiceList = (props) => {
  const {
    size,
    ...rest
  } = props

  return (
    <div className={[styles.niceList, (size ? styles[size] : '')].join(' ')}>
      <Table
        {...rest}
        pagination={false}
      />
    </div>
  )
}

export default NiceList
