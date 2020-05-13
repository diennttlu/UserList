namespace Model.Entity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("User")]
    public partial class User
    {
        public long ID { get; set; }

        [StringLength(200)]
        public string FullName { get; set; }

        [StringLength(100)]
        public string UserName { get; set; }

        [StringLength(10)]
        public string UserCode { get; set; }

        public int? PositionID { get; set; }

        [StringLength(200)]
        public string Team { get; set; }

        public int? UserTypeID { get; set; }

        public bool? Status { get; set; }
    }
}
