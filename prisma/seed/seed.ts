import { PrismaClient } from '@prisma/client';
import userSeed from './user.seed';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('--- Starting data seeding process ---');

    await userSeed();
    console.log('User addition completed.');

    console.log('--- Data seeding process completed ---');
  } catch (e) {
    console.error('Error during seeding:', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error('Error executing seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
