const Book = require("../../models/book");
const axios = require("axios");

const URL =
  "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=VgHyRgxgBo0edAp2MfcFctKDwAIFKNAb";

const getAllBooks = async (req, res) => {
  const today = new Date().toDateString();
  const book = await Book.findOne();
  const baseDate = book.date.toDateString();

  if (today === baseDate) {
    return res.send(await Book.find());
  }

  await Book.deleteMany();
  const result = await axios.get(URL);
  const data = await Book.insertMany(result.data.results.lists[0].books);
  return res.send(data);
};

module.exports = getAllBooks;
