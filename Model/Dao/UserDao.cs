using Model.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.ViewModel;

namespace Model.Dao
{
    public class UserDao
    {
        UserListDbContext db = null;

        public UserDao()
        {
            db = new UserListDbContext();
        }

        public List<UserModel> GetListUser(string fullName, string userName, string userCode, int positionID, string team, int userTypeID, bool status)
        {
            var data = from u in db.Users
                       join p in db.Positions on u.PositionID equals p.ID
                       join ut in db.UserTypes on u.UserTypeID equals ut.ID
                       select new UserModel
                       {
                           ID = u.ID,
                           FullName = u.FullName,
                           UserName = u.UserName,
                           UserCode = u.UserCode,
                           PositionID = u.PositionID,
                           PositionName = p.Name,
                           Team = u.Team,
                           UserTypeID = u.UserTypeID,
                           UserTypeName = ut.Name,
                           Status = u.Status
                       };
            if (!String.IsNullOrEmpty(fullName))
            {
                data = from u in data where u.FullName.Contains(fullName) select u;
            }
            if (!String.IsNullOrEmpty(userName))
            {
                data = from u in data where u.UserName.Contains(userName) select u;
            }
            if (!String.IsNullOrEmpty(userCode))
            {
                data = from u in data where u.UserCode.Contains(userCode) select u;
            }
            if (positionID != 0)
            {
                data = from u in data where u.PositionID == positionID select u;
            }
            if (!String.IsNullOrEmpty(team))
            {
                data = from u in data where u.Team.Contains(team) select u;
            }
            if (userTypeID != 0)
            {
                data = from u in data where u.UserTypeID == userTypeID select u;
            }
            if (status == false) 
            {
                data = from u in data where u.Status == status select u;
            }
            return data.OrderBy(u => u.ID).ToList();
        }

    }
}
