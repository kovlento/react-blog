import { Avatar, Divider } from 'antd'
import '../public/style/components/author.css'

const Author = () =>{
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="https://c-ssl.duitang.com/uploads/item/201609/24/20160924172958_2xEnT.thumb.700_0.jpeg" />
      </div>
      <div className="author-introduction">
        专注于WEB和移动前端开发。全栈Javascript爱好者。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon="github" className="account"/>
        <Avatar size={28} icon="qq" className="account"/>
        <Avatar size={28} icon="wechat" className="account"/>
      </div>
    </div>
  )
}

export default Author