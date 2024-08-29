 export const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0; // Захист від ділення на нуль, якщо масив порожній

  const sum = reviews.reduce((acc, review) => acc + review.reviewer_rating, 0);
  const average = sum / reviews.length;

  return average;
};
