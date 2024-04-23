"use client";

import { addReview } from "@/app/actions";

export default function ReviewForm({ sessionId }: any) {
  return (
    <form action={(formData) => addReview(formData, sessionId)}>
      <label>Unique user id</label>
      <br />
      <input type="text" name="userid" />
      <br />
      <label>Username</label>
      <br />
      <input type="text" name="username" />
      <br />
      <label>Rating</label>
      <br />
      <input type="text" name="rating" />
      <br />
      <label>Review</label>
      <br />
      <input type="text" name="review" />
      <br />
      <button>Add review</button>
    </form>
  );
}
