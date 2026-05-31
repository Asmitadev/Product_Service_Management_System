using Microsoft.AspNetCore.Mvc;
using ProductServiceAPI.Data;
using ProductServiceAPI.Models;

namespace ProductServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ServicesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServicesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetServices()
        {
            return Ok(_context.Services.ToList());
        }

        [HttpPost]
        public IActionResult AddService(Service service)
        {
            _context.Services.Add(service);

            _context.SaveChanges();

            return Ok(service);
        }
    }
}