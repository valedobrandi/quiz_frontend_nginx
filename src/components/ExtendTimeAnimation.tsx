type ExtendTimeAnimationProps = {
  timerExtendValue: number;
}

function ExtendTimeAnimation({ timerExtendValue }: ExtendTimeAnimationProps) {
  return (
    <p
      className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]
        pressStart text-red-500 animate-pulse absolute"
    >
      +{timerExtendValue}
    </p>
  );
}

export default ExtendTimeAnimation;
