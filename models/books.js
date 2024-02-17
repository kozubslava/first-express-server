let users = [{id: 0, email: 'test@test.test', password: '2134sadsa'}];

class User {
  static async create(userData) {
    const newUser = { ...userData };

    newUser.id = users.length;
    newUser.createdAt = new Date();

    users.push(newUser);

    return newUser;
  }

  static async findAll() {
    return users;
  }

  static async findOne(id) {

    const user = users.find(user  => user.id === id );

    return user;
  }

  static async update(id, newUserData) {

    users = users.map(user => {

      if(user.id !== id) {
        return user;
      }

      const updatedUser = {...user, ...newUserData }
      return updatedUser;
    });

    const updatedUser = await User.findOne(id);

    return updatedUser;
  }

  static async delete(id) {

    const deletedUser = await User.findOne(id);

    users = users.filter(user => user.id !== id);

    return deletedUser;
  }
}

module.exports = User;