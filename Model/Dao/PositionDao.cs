using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.Entity;

namespace Model.Dao
{
    public class PositionDao
    {
        UserListDbContext db = null;

        public PositionDao()
        {
            db = new UserListDbContext();
        }

        public List<Position> GetAll()
        {
            return db.Positions.ToList();
        }
    }
}
