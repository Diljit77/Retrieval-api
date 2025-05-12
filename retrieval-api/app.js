import express from 'express';
import topicRoutes from './routes/topicRoutes.js';

const app = express();

app.use('/api', topicRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

