
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
            <h1 className={styles.title}>Sign up</h1>
            <p className={styles.desc}>Log in with your data that you entered during your registration.</p>
          </Col>
          <Col className={[styles.formWrap, styles.reg].join('-')} span={24}>
            <Form
              layout="vertical"
            >
              <Form.Item label="Full name">
                <Input placeholder="your full name" />
              </Form.Item>
              <Form.Item label="Your e-mail">
                <Input placeholder="name@domain.com" />
              </Form.Item>
              <Form.Item label="Password">
                <Input placeholder="input password" />
              </Form.Item>
              <Form.Item style={{marginBottom: 0}}>
                <Button type="primary" size="large" block>Sign up</Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={24}>
            <Row justify="center">
              <Col flex="288px">
                <p className={styles.bottomTip}>
                  Already have an account? <a href="#">Sign in</a>
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
