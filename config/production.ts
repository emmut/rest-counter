import dotenv from 'dotenv';
dotenv.config();

export default {
  dbUri: (`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD && encodeURIComponent(process.env.DB_PASSWORD)}@restcounter.6iflh.mongodb.net/RestCounter?retryWrites=true&w=majority`),
}