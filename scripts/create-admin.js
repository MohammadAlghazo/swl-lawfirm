const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@swl-lawfirm.com.sa';
  const password = 'admin'; // We will tell the user to change this later
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.adminUser.upsert({
    where: { email },
    update: {
      password: hashedPassword,
    },
    create: {
      email,
      name: 'مدير النظام',
      password: hashedPassword,
    },
  });

  console.log('Admin user created successfully:', user.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
