//Example delete code. 
function ReviewItem({ review, onDeleteReview }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedReview) => onDeleteReview(deletedReview));
  }

  return (
    <div>
      <p>Score: {review.score}</p>
      <p>{review.comment}</p>
      <button onClick={handleDeleteClick}>Delete Review</button>
    </div>
  );
}

//Example create code
function ReviewForm({ userId, gameId, onAddReview }) {
    const [comment, setComment] = useState("");
    const [score, setScore] = useState("0");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:9292/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          score: score,
          user_id: userId,
          game_id: gameId,
        }),
      })
        .then((r) => r.json())
        .then((newReview) => onAddReview(newReview));
    }
  
    return <form onSubmit={handleSubmit}>{/* controlled form code here*/}</form>;
  }
  
  //Example update (PATCH) code 

  function EditReviewForm({ review, onUpdateReview }) {
    const [comment, setComment] = useState("");
    const [score, setScore] = useState("0");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch(`http://localhost:9292/reviews/${review.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          score: score,
        }),
      })
        .then((r) => r.json())
        .then((updatedReview) => onUpdateReview(updatedReview));
    }
  
    return <form onSubmit={handleSubmit}>{/* controlled form code here*/}</form>;
  }
  