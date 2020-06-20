
import {
  Row,
  Col,
  Form,
  Input,
  Button
} from 'antd'
import {
  LockOutlined,
  MailOutlined,
  GoogleOutlined
} from '@ant-design/icons'
import styles from './style.less';

const logo = require('../../../assets/logo.png')

const iconStyle = {fontSize: 20, color: '#1245FA'}

const Login = (props) => {

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
      <div className={styles.form}>
        <Row>
          <Col span={24}>
            <h1 className={styles.title}>Sign in</h1>
          </Col>
          <Col className={styles.formWrap} span={24}>
            <Form
              layout="vertical"
            >
              <Form.Item>
                <Input
                  placeholder="Email"
                  prefix={<MailOutlined style={iconStyle} />}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  placeholder="Password"
                  prefix={<LockOutlined style={iconStyle} />}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  size="large" block
                >SIGN IN</Button>
              </Form.Item>
              <div className={styles.orWrap}>
                or sign in with
              </div>
              <Form.Item>
                <Button
                  size="large" block
                  className={styles.gray}
                ><GoogleOutlined style={{color: '#1245FA', fontSize: 14}} /> Google</Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Col flex="288px">
                <p className={styles.bottomTip}>
                  Don’t have an account yet? <a href="#">Sign up</a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login
