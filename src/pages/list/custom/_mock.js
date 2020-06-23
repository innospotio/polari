
export default {
  'GET /api/complex/list': (req, res) => {
    const locale = req.query.locale
    let list = []

    if (locale === 'zh-CN') {
      list = []
    } else {
      list = [
        {
          id: '#7',
          key: '1',
          name: 'John Brown',
          email: 'ckctm12@gmail.com',
          image: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290',
          subject: 'Mobile Campaign',
          assignee: 'Claire',
          priority: 'Low',
          status: 'Open',
          date: '22 Oct 2016',
          tags: ['test tag', 'another tag', 'something tag', 'test tag', 'another tag', 'something tag']
        },
        {
          id: '#5',
          key: '2',
          name: 'Jim Green',
          email: 'nvt.isst.nute@gmail.com',
          image: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853',
          subject: 'I need help with adding a new contact data to be...',
          assignee: 'Irma',
          priority: 'Medium',
          status: 'Closed',
          date: '22 Oct 2016',
          tags: ['another tag', 'something tag']
        },
        {
          id: '#71',
          key: '3',
          name: 'Joe Black',
          image: 'http://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&f=JPEG?w=4610&h=2968',
          subject: 'Mobile Campaign',
          assignee: 'Judith',
          priority: 'High',
          status: 'Closed',
          date: '22 Oct 2016',
          tags: ['test tag', 'another tag', 'something tag']
        },
        {
          id: '#7',
          key: '1',
          name: 'John Brown',
          email: 'thuhang.nute@gmail.com',
          image: 'http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290',
          subject: 'Mobile Campaign',
          assignee: 'Claire',
          priority: 'Low',
          status: 'Open',
          date: '22 Oct 2016',
          tags: ['test tag', 'another tag']
        },
        {
          id: '#5',
          key: '2',
          name: 'Jim Green',
          email: 'tranthuy.nute@gmail.com',
          image: 'http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853',
          subject: 'I need help with adding a new contact data to be...',
          assignee: 'Irma',
          priority: 'Medium',
          status: 'Closed',
          date: '22 Oct 2016',
          tags: ['test tag', 'another tag', 'something tag']
        },
        {
          id: '#71',
          key: '3',
          name: 'Joe Black',
          email: 'binhan628@gmail.com',
          image: 'http://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&f=JPEG?w=4610&h=2968',
          subject: 'Mobile Campaign',
          assignee: 'Judith',
          priority: 'High',
          status: 'Closed',
          date: '22 Oct 2016',
          tags: ['test tag', 'another tag', 'something tag']
        },
      ];
    }

    res.send({
      status: 'ok',
      data: {
        list
      }
    });
  }
};
