const Arrow = ({ fill }: { fill?: string }) => {
  return (
    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.75 0.75L5.25 5.25L0.75 9.75"
        stroke={fill || '#232321'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
