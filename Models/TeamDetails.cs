using System;
using System.Collections.Generic;

namespace TeamManagement.Models
{
    public partial class TeamDetails
    {
        public int PlayerId { get; set; }
        public string PlayerName { get; set; }
        public string Role { get; set; }
        public int? JerseyNo { get; set; }
        public string PlayerCountry { get; set; }
        public string PlayerSalary { get; set; }
        public string PlayerImg { get; set; }
    }
}
