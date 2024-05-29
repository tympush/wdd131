let reviewCount = localStorage.getItem("reviewCount");

if (!reviewCount) {
    reviewCount = 0;
} else {
    reviewCount = parseInt(reviewCount);
}

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);