import ReviewForm from "./ReviewForm";

export default function ReviewPage({ params: { sessionId } }: any) {
  return (
    <div>
      <ReviewForm sessionId={sessionId} />
    </div>
  );
}
