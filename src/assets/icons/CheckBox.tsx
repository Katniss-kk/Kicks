const CheckBox = ({ style }: { style: string }) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="13" height="13" fill={style || 'transparent'} className={style} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.75 0H1.25C0.559644 0 0 0.559644 0 1.25V13.75C0 14.4404 0.559644 15 1.25 15H13.75C14.4404 15 15 14.4404 15 13.75V1.25C15 0.559644 14.4404 0 13.75 0ZM1.25 13.75V1.25H13.75V13.75H1.25Z"
        fill="#1F1A24"
      />
    </svg>
  );
};

export default CheckBox;
