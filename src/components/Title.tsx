type TitleProps = { text: string }

export const Title = ({ text }: TitleProps) => {
  return (
    <h1 className='font-bold text-xl p-6 pb-0 text-darkBlue'>
      { text }
    </h1>
  );
}