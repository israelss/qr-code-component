type QrCodeProps = {
  qrCode: string;
  alt: string;
}

export const QrCode = ({ qrCode, alt }: QrCodeProps) => {
  return <img className='rounded-lg w-full' src={ qrCode } alt={ alt } />
}
