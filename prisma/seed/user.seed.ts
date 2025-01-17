import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const users = [
  {
    name: 'User Empty',
    email: 'user@gmail.com',
    password: 'all12345',
    role: Role.user,
    emailVerified: new Date(),
  },
  {
    name: 'Admin Empty',
    email: 'admin@gmail.com',
    password: 'all12345',
    role: Role.admin,
    emailVerified: new Date(),
  },
];

const hashPassword = async (password: string): Promise<string> => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    console.error('Error hashing password:', error);
    throw new Error('Unable to hash password');
  }
};

const upsertUser = async (user: (typeof users)[number]): Promise<void> => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      console.log(`User ${user.email} already exists, no need to add.`);
    } else {
      const hashedPassword = await hashPassword(user.password);

      await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: hashedPassword,
          role: user.role,
          emailVerified: user.emailVerified,
        },
      });

      console.log(`User ${user.email} added successfully.`);
    }
  } catch (error) {
    console.error(`Error adding or updating user ${user.email}:`, error);
  }
};

const userSeed = async (): Promise<void> => {
  try {
    console.log('--- Adding users ---');
    await Promise.all(users.map((user) => upsertUser(user)));
    console.log('--- Users added successfully ---');
  } catch (error) {
    console.error('Error during user addition:', error);
  } finally {
    await prisma.$disconnect();
  }
};

if (require.main === module) {
  userSeed();
}

export default userSeed;
