using Microsoft.AspNetCore.Mvc;
using ProductServiceAPI.Data;
using ProductServiceAPI.Models;
using System.Linq;

namespace ProductServiceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET ALL PRODUCTS
        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(_context.Products.ToList());
        }

        // GET PRODUCT COUNT
        [HttpGet("count")]
        public IActionResult GetCount()
        {
            var total = _context.Products.Count();

            return Ok(total);
        }

        // POST PRODUCT
        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            _context.Products.Add(product);

            _context.SaveChanges();

            return Ok(product);
        }

        // PUT PRODUCT
        [HttpPut("{id}")]
        public IActionResult UpdateProduct(int id, Product updatedProduct)
        {
            var product = _context.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            product.ProductName = updatedProduct.ProductName;
            product.Category = updatedProduct.Category;
            product.Price = updatedProduct.Price;
            product.Quantity = updatedProduct.Quantity;
            product.Description = updatedProduct.Description;

            _context.SaveChanges();

            return Ok(product);
        }

        // DELETE PRODUCT
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var product = _context.Products.Find(id);

            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);

            _context.SaveChanges();

            return Ok("Product deleted successfully");
        }
    }
}