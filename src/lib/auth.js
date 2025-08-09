import jwt from 'jsonwebtoken';
import prisma from './prisma';

export const auth = async (req) => {
  const header = req.headers.authorization;
  if (!header) throw new Error('Missing token');
  const token = header.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await prisma.person.findUnique({ where: { id: decoded.sub } });
  if (!user) throw new Error('Invalid token');
  return user;
};

export const permit = (user, ...roles) => {
  if (!roles.includes(user.role)) throw new Error('Forbidden');
};
