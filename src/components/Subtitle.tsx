type SubtitleProps = { text: string }

export const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <h2 className='font-normal text-paragraph p-4 text-grayishBlue'>
      { text }
    </h2>
  );
}
