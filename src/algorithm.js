function minMaxNormalization(value, min_value, max_value) {
  return (value - min_value) / (max_value - min_value);
}

function normalize(products) {
  const product_ids = products.map(product => product.id);
  const popularity_values = products.map(product => product.popularity);
  const ratings_values = products.map(product => product.ratings);
  const sales_volume_values = products.map(product => product.sales_volume);
  console.log(sales_volume_values);

  const popularity_min = Math.min(...popularity_values);
  const popularity_max = Math.max(...popularity_values);
  const normalized_popularity = popularity_values.map(val => minMaxNormalization(val, popularity_min, popularity_max));

  const ratings_min = Math.min(...ratings_values);
  const ratings_max = Math.max(...ratings_values);
  const normalized_ratings = ratings_values.map(val => minMaxNormalization(val, ratings_min, ratings_max));

  const sales_min = Math.min(...sales_volume_values);
  const sales_max = Math.max(...sales_volume_values);
  const normalized_sales = sales_volume_values.map(val => minMaxNormalization(val, sales_min, sales_max));

  const normalized_products = products.map((product, index) => {
    return {
      id: product.id,
      normalized_popularity: normalized_popularity[index],
      normalized_ratings: normalized_ratings[index],
      normalized_sales_volume: normalized_sales[index],
      popularity: product.popularity,
      ratings: product.ratings,
      sales_volume: product.sales_volume,
      img: product.img,
      pp: product.pp,
      price: product.price,
      username: product.username,
      desc: product.desc
    };
  });

  return normalized_products;
}

function calculateProductScore(product, weights) {
  return (
    (product.normalized_popularity * weights.popularity) +
    (product.normalized_ratings * weights.ratings) +
    (product.normalized_sales_volume * weights.sales_volume)
  );
}

 export function sort_score(products) {

    const normalized_products = normalize(products);
    const weights = {popularity: 0.4 , ratings: 0.75, sales_volume: 0.86};
    
    const score = normalized_products.map(product => {
      return {
        product_id: product.id,
        product_score: calculateProductScore(product, weights),
        popularity: product.popularity,
        ratings: product.ratings,
        sales_volume: product.sales_volume,
        img: product.img,
        pp: product.pp,
        price: product.price,
        username: product.username,
        desc: product.desc
      };
    });
    
    const sorted_score = score.sort((a, b) => b.product_score - a.product_score);
    return sorted_score;
}
