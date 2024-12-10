function countCategories(categories) {
    // Group and count occurrences using reduce
    const categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    return categoryCounts;
}

// Extra Challenge: Sort categories by count in descending order
function sortCategoriesByCount(categories) {
    const categoryCounts = countCategories(categories);
    return Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([category]) => category);
}

// Example Input
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

// Example Outputs
console.log(countCategories(categories)); // { electronics: 2, clothing: 2, toys: 3 }
console.log(sortCategoriesByCount(categories)); // ["toys", "electronics", "clothing"]
