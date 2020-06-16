
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
        pagination={{
          showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        }}
      />
    </div>
  )
}

export default NiceList
