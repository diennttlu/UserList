using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.Entity;

namespace Model.Dao
{
    public class UserTypeDao
    {
        UserListDbContext db = null;

        public UserTypeDao()
        {
            db = new UserListDbContext();
        }

        public List<UserType> GetAll()
        {
            return db.UserTypes.ToList();
        }
    }
}
