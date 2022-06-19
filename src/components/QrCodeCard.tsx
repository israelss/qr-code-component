import qrCodeImg from '../assets/images/image-qr-code.png'
import { QrCode } from './QrCode'
import { Subtitle } from './Subtitle'
import { Title } from './Title'

export const QrCodeCard = () => {
  return (
    <div className='max-w-screen-mobile p-4'>
      <div className='bg-white m-4 p-4 rounded-2xl'>
        <QrCode qrCode={ qrCodeImg } alt='Qr-Code leading to Frontend Mentor website' />
        <Title text='Improve your front-end skills by building projects' />
        <Subtitle text='Scan the QR code to visit Frontend Mentor and take your coding skills to the next level' />
      </div>
    </div>
  )
}
