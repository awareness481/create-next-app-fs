// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default (req, res) => {
  const readme = fs.readFileSync("package.json", "utf8");
  return JSON.parse(readme);
}
