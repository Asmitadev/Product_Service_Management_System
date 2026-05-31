using Microsoft.EntityFrameworkCore;
using ProductServiceAPI.Models;

namespace ProductServiceAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Service> Services { get; set; }
    }
}