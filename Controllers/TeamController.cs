using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeamManagement.Models;

namespace TeamManagement.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {
        public ArekhWebApiContext _context = null;
        public TeamController(ArekhWebApiContext context)
        {
            _context = context;
        }
        [Route("Team/All")]
        public List<TeamDetails> GetAll() => _context.TeamDetails.ToList();
        [Route("Team/{id}")]
        public TeamDetails getTeam(int id) => _context.TeamDetails.FirstOrDefault((t) => t.PlayerId == id);


        [Route("Team")]
        [HttpPost]
        public string AddNew(TeamDetails emp)
        {
            _context.TeamDetails.Add(emp);
            _context.SaveChanges();
            return "Added to database";
        }
        [Route("Team")]
        [HttpPut]
        public string Update(TeamDetails tm)
        {
            var selected = _context.TeamDetails.FirstOrDefault((t) => t.PlayerId == tm.PlayerId);
            if (selected == null) return "Employees Not Found to Update ";
            selected.PlayerName = tm.PlayerName;
            selected.Role = tm.Role;
            selected.JerseyNo = tm.JerseyNo;
            selected.PlayerCountry = tm.PlayerCountry;
            selected.PlayerSalary = tm.PlayerSalary;
            selected.PlayerImg = tm.PlayerImg;

            _context.SaveChanges();
            return "updated in the Server";
        }
        [Route("Team/{id}")]
        [HttpDelete]

        public string Delete(int id)
        {
            var foundRec = _context.TeamDetails.FirstOrDefault((t) => t.PlayerId == id);
            if (foundRec == null) return "No Records Found";
            _context.TeamDetails.Remove(foundRec);
            _context.SaveChanges();
            return "Data is Deleted";
        }


    }

}
