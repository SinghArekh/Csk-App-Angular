using System;
using System.Collections.Generic;

namespace TeamManagement.Models
{
    public partial class EmployeeTable
    {
        public int EmpId { get; set; }
        public string EmpName { get; set; }
        public string EmpAddress { get; set; }
        public int EmpSalary { get; set; }
        public string EmpImage { get; set; }
    }
}
