const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Lucas',
          email: 'lucaoxt@gmail.com',
          password_hash: await bcryptjs.hash('1234567', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Lucas',
          email: 'lucaoxt@hotmail.com',
          password_hash: await bcryptjs.hash('1234567', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {
    // Nothing to do
  },
};
