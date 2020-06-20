
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox
} from 'antd'
import styles from './style.less';

const logo = require('../../../assets/logo.png')

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
            <p className={styles.desc}>Log in with your data that you entered during your registration.</p>
          </Col>
          <Col className={styles.formWrap} span={24}>
            <Form
              layout="vertical"
            >
              <Form.Item label="Your e-mail">
                <Input placeholder="name@domain.com" />
              </Form.Item>
              <Form.Item label="Password">
                <Input placeholder="input password" />
              </Form.Item>
              <div className={styles.checkboxWrap}>
                <Checkbox>Keep me logged in</Checkbox>
              </div>
              <Form.Item style={{marginBottom: 0}}>
                <Button type="primary" size="large" block>Log in</Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Col flex="288px">
                <p className={styles.bottomTip}>
                  Don’t have an account? <a href="#">Sign up</a><br />
                  <a href="#">Forgot password?</a>
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
