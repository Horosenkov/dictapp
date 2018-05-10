using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options)
            : base(options)
        {
        }

        public DbSet<Dictionary> Dictionaries {get;set;}
        public DbSet<Word> Words {get;set;}
        public DbSet<Translate> Translates {get;set;}
        
    }

}