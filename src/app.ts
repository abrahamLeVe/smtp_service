import express from 'express';
import emailRoutes from './routes/emailRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/email', emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor SMTP en ejecución en el puerto ${PORT}`);
});
