import { last } from 'lodash';
import { Button } from 'antd-mobile'

export default function Home(){
  console.log(111, last([1, 2, 3]));
  return (
    <div>
      首页
      <Button color='primary' fill='solid'>
            Solid123
          </Button>
      </div>
  )
}