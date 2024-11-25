type SideCardProps = {
  image: string;
  title: string;
  style: string;
  styleAbsolute: string;
}

function SideCard({ image, title, style, styleAbsolute }: SideCardProps) {
  return (
      <div className="grid grid-cols-1 gap-1">
        <div
          className={`relative flex flex-col items-center justify-center 
          ${style} rounded-2xl p-5 w-[60%] m-auto`}
        >
          <div className={styleAbsolute}>
            <div className="flex flex-row items-start justify-center space-x-2">
              <p className="text-sm">{title}</p>
            </div>
          </div>
            <img
              className="w-12 h-12 animate-bounce 
              animate-infinite animate-duration-[1000ms]"
              src={image}
              alt="crown picture"
            />
        </div>
      </div>
  );
};

export default SideCard;
