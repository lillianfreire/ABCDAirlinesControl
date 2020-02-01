using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ABCDAir.Models
{
    public class AppDbContext: DbContext
    {
        public DbSet<Aeronave> Aeronaves { get; set; }
        public DbSet<Modelo> Modelos { get; set; }
    }
}
