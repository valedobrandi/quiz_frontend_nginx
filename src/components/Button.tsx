export default function Button({ setClick = () => {}, title = 'Enter Title', isDisable = false, style = '' }) {
  return (
    <button
      disabled={isDisable}
      className={`btn btn-active btn-xs text-ms 
      bg-[#641ae6] text-[#f1f3f5] uppercase ml-6 ${style}`}
      onClick={setClick}>
      {title}
    </button>
  );
}
