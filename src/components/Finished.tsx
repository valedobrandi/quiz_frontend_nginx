type FinishPropsType = {
  points: number;
  totalPoints: number;
}

export default function Finished({ points, totalPoints }: FinishPropsType) {
  const totalPercentage = (points * 100) / totalPoints;
  return (
    <>
      <p className="result tracking-widest	">
        You scored <strong>{points}</strong> out of {totalPoints} (
        {Math.ceil(totalPercentage)}%)
      </p>
    </>
  );
}
