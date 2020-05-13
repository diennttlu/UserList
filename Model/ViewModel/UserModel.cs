using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.ViewModel
{
    public class UserModel
    {
        public long ID { get; set; }
        public string FullName { get; set; }

        public string UserName { get; set; }

        public string UserCode { get; set; }

        public int? PositionID { get; set; }
        public string PositionName { get; set; }

        public string Team { get; set; }
        public int? UserTypeID { get; set; }
        public string UserTypeName { get; set; }

        public bool? Status { get; set; }
    }
}
