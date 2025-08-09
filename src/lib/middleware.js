const jwt = require('jsonwebtoken');
const prisma = require('../prismaClient');

const auth = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'Missing auth token' });
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.person.findUnique({ where: { id: decoded.sub } });
    if (!user) return res.status(401).json({ error: 'Invalid token' });
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

const permit = (...allowed) => (req, res, next) => {
  if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
  if (allowed.includes(req.user.role)) return next();
  return res.status(403).json({ error: 'Forbidden' });
};

module.exports = { auth, permit };