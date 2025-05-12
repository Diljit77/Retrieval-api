import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getTopics(req, res) {
  const query = req.query.search;
  const sort = req.query.sort;

  if (!query) {
    return res.status(400).json({ error: 'Search query is required' });
  }

  const filePath = join(__dirname, '../data/topics.json');

  try {
    const data = await readFile(filePath, 'utf8');
    let topics = JSON.parse(data);

    // Filter
    topics = topics.filter(t =>
      t.name.toLowerCase().includes(query.toLowerCase())
    );

    // Sort if requested
    if (sort === 'name') {
      topics.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'category') {
      topics.sort((a, b) => a.category.localeCompare(b.category));
    }

    return res.status(200).json(topics);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to read data' });
  }
}
