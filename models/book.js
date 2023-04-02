const { Schema, model } = require("mongoose");

const bookSchema = Schema({
  age_group: String,
  amazon_product_url: String,
  article_chapter_link: String,
  author: String,
  book_image: String,
  book_image_width: Number,
  book_image_height: Number,
  book_review_link: String,
  book_uri: String,
  contributor: String,
  contributor_note: String,
  created_date: String,
  description: String,
  first_chapter_link: String,
  price: String,
  primary_isbn10: String,
  primary_isbn13: String,
  publisher: String,
  rank: Number,
  rank_last_week: Number,
  sunday_review_link: String,
  title: String,
  updated_date: String,
  weeks_on_list: Number,
  buy_links: Array,
  date: {
    type: Date,
    default: Date(),
  },
});

const Book = model("book", bookSchema);

module.exports = Book;
